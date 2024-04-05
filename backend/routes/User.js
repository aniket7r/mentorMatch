import { Router } from "express";
// import { volunteerMiddleware, username } from "../middleware/volunteer";
import { Skills } from '../database/userDB'
// import { JWT_SECRET } from "../config";
// import jwt from "jsonwebtoken";
import { z } from "zod";

const router = Router();

// const volunteerMiddleware = require("../../../assignments-master/week-3/04-mongo-with-jwt-auth/solution/middleware/admin");

// input validation
// const username = z.string().email();
// const password = z.string().min(6);
// const age = z.number();


// Volunteer Routes
router.post('/skill', async (req, res) => {
    // Implement volunteer signup logic
    const username = req.body.username;
    // username.safeParse(username)
    const password = req.body.password;
    // password.safeParse(password)
    const age = req.body.age;
    // age.safeParse(age);
    const is_volunteer = true;

    // check if a user with this username already exists
    await Volunteer.create({
        username: username,
        password: password,
        age : age,
        is_volunteer : true,
    })

    res.json({
        message: 'Volunteer created successfully'
    })
});


module.exports = router;