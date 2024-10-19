import mongoose from "mongoose";
import { Router } from "express";
import { User, Skills, Answer } from "../database/userDB.js";
import JWT_SECRET from "../config.js";
import jwt from "jsonwebtoken";
import zod from "zod";
import { startApp } from "../matching-algorithm/app.js";
import { authenticateToken } from "../utils/auth.js";

const landingRouter = Router();

// ************************************************************
// ZOD SCHEMAS

// Schema for user signup
const signupBody = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
});

// Schema for adding/updating answers
const answersBody = zod.object({
    answers: zod.array(
        zod.object({
            qId: zod.string(),
            answer: zod.string(),
            acceptableAnswers: zod.array(zod.string()),
            importance: zod.string(),
        })
    ),
});

// ************************************************************
// ROUTES

/**
 * User Signup Route
 * This route registers a new user with their basic information.
 * It checks if the username already exists and returns an appropriate response.
 */
landingRouter.post("/signup", async (req, res) => {
    const { success, data } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid input data" });
    }

    const existingUser = await User.findOne({ username: data.username });
    if (existingUser) {
        return res.status(409).json({ message: "Email already taken" });
    }

    // Create the user
    const newUser = new User({
        username: data.username,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
    });

    await newUser.save();

    const userId = newUser._id;
    const token = jwt.sign({ userId }, JWT_SECRET);

    res.status(201).json({
        message: "User created successfully",
        token: token,
    });
});

/**
 * Route to add or update user answers
 * Requires authentication
 * If answers already exist, they will be updated; otherwise, new answers will be created.
 */
landingRouter.post("/answers", authenticateToken, async (req, res) => {
    const { success, data } = answersBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid input data" });
    }

    const userId = req.user.userId;

    // Update or create answers
    const userAnswers = await Answer.findOne({ userId });

    if (userAnswers) {
        for (const newAnswer of data.answers) {
            const existingAnswer = userAnswers.answers.find((a) => a.qId === newAnswer.qId);
            if (existingAnswer) {
                // Update existing answer
                existingAnswer.answer = newAnswer.answer;
                existingAnswer.acceptableAnswers = newAnswer.acceptableAnswers;
                existingAnswer.importance = newAnswer.importance;
            } else {
                // Add new answer
                userAnswers.answers.push(newAnswer);
            }
        }
        // Sort answers by qId before saving
        userAnswers.answers.sort((a, b) => a.qId.localeCompare(b.qId));
        await userAnswers.save();
    } else {
        // Create new answer document if not existing
        const newAnswerDoc = new Answer({
            userId: userId,
            answers: data.answers.sort((a, b) => a.qId.localeCompare(b.qId)),
        });
        await newAnswerDoc.save();
    }

    // Run the matching algorithm if answers are updated or added
    startApp(userId);

    res.status(200).json({ message: "Answers saved successfully" });
});

// ************************************************************
// SIGNIN ROUTE

/**
 * User Signin Route
 * This route allows users to login using their email and password.
 */
const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
});

landingRouter.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({ message: "Invalid login details" });
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password,
    });

    if (user) {
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);

        res.json({ token: token });
        return;
    }

    res.status(401).json({ message: "Invalid credentials" });
});

// ************************************************************
// GET USER PROFILE ROUTE

/**
 * Get User Profile
 * Requires authentication
 * Retrieves the complete profile of the authenticated user including skills and answers.
 */
landingRouter.get("/profile", authenticateToken, async (req, res) => {
    try {
        const userId = req.user.userId;
        const userProfile = await User.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(userId) } },
            {
                $lookup: {
                    from: "skills",
                    localField: "_id",
                    foreignField: "userId",
                    as: "skills",
                },
            },
            {
                $lookup: {
                    from: "answers",
                    localField: "_id",
                    foreignField: "userId",
                    as: "answers",
                },
            },
            { $unwind: { path: "$answers", preserveNullAndEmptyArrays: true } },
            { $unwind: { path: "$answers.answers", preserveNullAndEmptyArrays: true } },
            {
                $lookup: {
                    from: "questions",
                    localField: "answers.answers.qId",
                    foreignField: "_id",
                    as: "answers.answers.question",
                },
            },
            { $unwind: { path: "$answers.answers.question", preserveNullAndEmptyArrays: true } },
            {
                $group: {
                    _id: "$_id",
                    username: { $first: "$username" },
                    firstName: { $first: "$firstName" },
                    lastName: { $first: "$lastName" },
                    skills: { $first: "$skills.skills" },
                    answers: {
                        $push: {
                            questionId: "$answers.answers.qId",
                            answer: "$answers.answers.answer",
                            acceptableAnswers: "$answers.answers.acceptableAnswers",
                            importance: "$answers.answers.importance",
                        },
                    },
                },
            },
            {
                $project: {
                    _id: 1,
                    username: 1,
                    firstName: 1,
                    lastName: 1,
                    skills: 1,
                    answers: {
                        $filter: {
                            input: "$answers",
                            as: "answer",
                            cond: { $ne: ["$$answer.questionId", null] },
                        },
                    },
                },
            },
        ]);

        res.status(200).json(userProfile[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

export { landingRouter };
