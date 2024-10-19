import mongoose from "mongoose";
import { User, Skills, Answer, Question } from "../../../database/userDB.js";

// DB Aggregation

const getAllUserProfiles = async () => {
    const Profiles = await User.aggregate([
        {
            $lookup: {
                from: 'skills',
                localField: '_id',
                foreignField: 'userId',
                as: 'skills'
            }
        },
        {
            $lookup: {
                from: 'answers',
                localField: '_id',
                foreignField: 'userId',
                as: 'answers'
            }
        },
        {
            $unwind: { path: '$answers', preserveNullAndEmptyArrays: true }
        },
        {
            $unwind: { path: '$answers.answers', preserveNullAndEmptyArrays: true }
        },
        {
            $lookup: {
                from: 'questions',
                localField: 'answers.answers.qId',
                foreignField: '_id',
                as: 'answers.answers.question'
            }
        },
        {
            $unwind: { path: '$answers.answers.question', preserveNullAndEmptyArrays: true }
        },
        {
            $group: {
                _id: '$_id',
                username: { $first: '$username' },
                firstName: { $first: '$firstName' },
                lastName: { $first: '$lastName' },
                skills: { $first: '$skills.skills' },
                answers: {
                    $push: {
                        questionId: '$answers.answers.qId',
                        answer: '$answers.answers.answer',
                        acceptableAnswers: '$answers.answers.acceptableAnswers',
                        importance: '$answers.answers.importance'
                    }
                }
            }
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
                        input: '$answers',
                        as: 'answer',
                        cond: { $ne: ['$$answer.questionId', null] }
                    }
                }
            }
        }
    ]);

    // console.log(JSON.stringify(Profiles, null, 2));
    return Profiles;
};


export { getAllUserProfiles };

// output sample
// [
//     {
//       "_id": "60d21b4667d0d8992e610c85",
//       "username": "alice",
//       "firstName": "Alice",
//       "lastName": "Smith",
//       "skills": ["JavaScript"],
//       "answers": [
//         {
//           "questionId": "q1",
//           "answer": 42,
//           "acceptableAnswers": [0],
//           "importance": 1
//         },
//         {
//           "questionId": "q2",
//           "answer": "blue",
//           "acceptableAnswers": [1, 3],
//           "importance": 1
//         }
//       ]
//     },
//     {
//       "_id": "60d21b4667d0d8992e610c86",
//       "username": "bob",
//       "firstName": "Bob",
//       "lastName": "Brown",
//       "skills": ["Python"],
//       "answers": [
//         {
//           "questionId": "q3",
//           "answer": "yes",
//           "acceptableAnswers": [2],
//           "importance": 2
//         }
//       ]
//     }
//   ]
  
  