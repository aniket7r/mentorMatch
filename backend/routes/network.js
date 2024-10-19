
import { Router } from "express";
// import { Middleware } from "../middleware/volunteer.js";
import {User} from "../database/userDB.js"
import JWT_SECRET from "../config.js";
import jwt from "jsonwebtoken";
import zod from "zod";
import { NotificationManager, Notification, Mentorship, Follows } from "../database/userDB.js";
import { authenticateToken } from "../utils/auth.js";
const networkRouter = Router();

// POST route for NotificationManager
networkRouter.post('/notification-manager', async (req, res) => {
    try {
        const { sender, receiver, type } = req.body;
        const notification = new NotificationManager({ sender, receiver, type });

        await notification.save();
        res.status(201).send(notification);
    } catch (error) {
        res.status(500).send(error);
    }
});

// PUT route for NotificationManager to update status
networkRouter.put('/notification-manager', authenticateToken, async (req, res) => {
    try {
        const receiverId = req.user.userId;
        console.log(receiverId)
        const { status } = req.body;
        const notification = await NotificationManager.findOne({ receiver: receiverId });

        if (!notification) {
            return res.status(404).send({ message: 'Notification not found' });
        }

        notification.status = status;
        await notification.save();

        if (status === 'accepted') {
            if (notification.type === 'mentorship') {
                await Mentorship.updateOne(
                    { userId: notification.sender },
                    { $addToSet: { mentors: notification.receiver } },
                    { upsert: true }
                );
                await Mentorship.updateOne(
                    { userId: notification.receiver },
                    { $addToSet: { mentees: notification.sender } },
                    { upsert: true }
                );
            }

            if (notification.type === 'follows') {
                await Follows.updateOne(
                    { userId: notification.sender },
                    { $addToSet: { following: notification.receiver } },
                    { upsert: true }
                );
                await Follows.updateOne(
                    { userId: notification.receiver },
                    { $addToSet: { followers: notification.sender } },
                    { upsert: true }
                );
            }
        }

        res.status(200).send(notification);
    } catch (error) {
        res.status(500).send(error);
    }
});

// GET route for Notifications
networkRouter.get('/notifications', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.userId;
        console.log(userId)
        const notifications = await Notification.findOne({ userId });
        console.log(notifications)
        res.status(200).send(notifications);
    } catch (error) {
        res.status(500).send(error);
    }
});

// GET route for Mentorship
networkRouter.get('/mentorship',authenticateToken, async (req, res) => {
    try {
        const userId = req.user.userId;
        const mentorship = await Mentorship.findOne({ userId: userId });
        if (!mentorship) {
            return res.status(404).json({ message: 'mentorship not found for this user.' });
        }


        // Fetch mentees details
        const menteeDetails = await User.find({ _id: { $in: mentorship.mentees } }, 'username firstName lastName');
        const mentees = menteeDetails.map(mentee => ({
        _id: mentee._id,
        username: mentee.username,
        firstName: mentee.firstName,
        lastName: mentee.lastName
        }));

        // Fetch mentors details
        const mentorDetails = await User.find({ _id: { $in: mentorship.mentors } }, 'username firstName lastName');
        const mentors = mentorDetails.map(mentor => ({
        _id: mentor._id,
        username: mentor.username,
        firstName: mentor.firstName,
        lastName: mentor.lastName
        }));

        // Send the combined response with IDs, first names, and last names
        res.json({
        _id: mentorship._id,
        userId: mentorship.userId,
        mentees,
        mentors
        });

    } catch (error) {
        console.error('Error fetching mentorship details:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
    });

    // GET route for Follows
    networkRouter.get('/follows',authenticateToken, async (req, res) => {
        try {
            const userId = req.user.userId;
            const follows = await Follows.findOne({ userId });
            res.status(200).send(follows);
        } catch (error) {
            res.status(500).send(error);
        }
});

// GET route for connections aggregation
networkRouter.get('/connections',authenticateToken, async (req, res) => {
    try {
        const userId = req.user.userId;
        const mentorships = await Mentorship.findOne({ userId });
        const follows = await Follows.findOne({ userId });

        const connections = {
            mentors: mentorships ? mentorships.mentors : [],
            mentees: mentorships ? mentorships.mentees : [],
            following: follows ? follows.following : [],
            followers: follows ? follows.followers : []
        };

        res.status(200).send(connections);
    } catch (error) {
        res.status(500).send(error);
    }
});
export { networkRouter }