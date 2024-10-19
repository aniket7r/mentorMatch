// import express from 'express';
// import mongoose from 'mongoose';
// import { Match } from '../database/matchesDB.js';
// import { Router } from 'express';
// import { authenticateToken } from '../utils/auth.js';
// const matchRouter = Router();


// // i have removed the authenticateToken middleware from the get request. add them later
// matchRouter.get('/', authenticateToken, async (req, res) => {
//     try {
//         const userId = req.user.userId;
//         const matchData = await Match.findOne({ userId: userId });
        
//         if (!matchData) {
//             return res.status(404).json({ message: 'Matches not found for this user.' });
//         }
//         console.log("matchData: ", matchData);
//         const response = {
//             userId: matchData.userId,
//             matches: {}
//         };

//         for (const [key, value] of matchData.matches.entries()) {
//             response.matches[key] = {
//                 score: value.score,
//                 matchedUserIds: value.matchedUserIds
//             };
//         }

//         res.json(response);
//     } catch (error) {
//         console.error('Error fetching match data:', error);
//         res.status(500).json({ message: 'Internal server error.' });
//     }
// });

// export { matchRouter };










// import express from 'express';
// import mongoose from 'mongoose';
// import { Match } from '../database/matchesDB.js';
// import { User } from '../database/userDB.js'; // Import User model
// import { Router } from 'express';
// import { authenticateToken } from '../utils/auth.js';

// const matchRouter = Router();

// // GET request to fetch matches with user details
// matchRouter.get('/', authenticateToken, async (req, res) => {
//     try {
//         const userId = req.user.userId;
//         const matchData = await Match.findOne({ userId: userId }).populate({
//             path: 'matches.matchedUserIds',
//             select: 'firstName lastName' // Select only firstName and lastName fields
//         });

//         if (!matchData) {
//             return res.status(404).json({ message: 'Matches not found for this user.' });
//         }
//         // console.log("matchData is : " , matchData);
//         const response = {
//             userId: matchData.userId,
//             matches: {}
//         };

//         for (const [key, value] of matchData.matches.entries()) {
//             response.matches[key] = {
//                 score: value.score,
//                 matchedUsers: value.matchedUserIds.map(user => ({
//                     firstName: user.firstName,
//                     lastName: user.lastName
//                 }))
//             };
//         }

//         res.json(response);
//     } catch (error) {
//         console.error('Error fetching match data:', error);
//         res.status(500).json({ message: 'Internal server error.' });
//     }
// });

// export { matchRouter };





import express from 'express';
import mongoose from 'mongoose';
import { Match } from '../database/matchesDB.js';
import { User } from '../database/userDB.js';
import { Router } from 'express';
import { authenticateToken } from '../utils/auth.js';

const matchRouter = Router();

matchRouter.get('/', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.userId;
        const matchData = await Match.findOne({ userId: userId });
        
        if (!matchData) {
            return res.status(404).json({ message: 'Matches not found for this user.' });
        }

        console.log("matchData: ", matchData);

        // Prepare the response object
        const response = {
            userId: matchData.userId,
            matches: {}
        };

        // Process each match in the Map
        await Promise.all(Array.from(matchData.matches.entries()).map(async ([key, value]) => {
            // console.log('Fetching user for match key (userId):', key);
            const user = await User.findById(key);
            if (user) {
                console.log('Found user:', user);
                response.matches[key] = {
                    score: value.score,
                    matchedUser: {
                        userId: key,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName
                    }
                };
            } else {
                console.log('User not found for match key (userId):', key);
                response.matches[key] = {
                    score: value.score,
                    matchedUser: null
                };
            }
        }));

        res.json(response);
    } catch (error) {
        console.error('Error fetching match data:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

export { matchRouter };
