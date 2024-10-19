// //  a get request so to give questions to frontend

// // a post reqest to to get the answers from the frotend

// // store that details in the db
// // routes will be as follow: 
// // yourvibe :  for vibe questions
// // yourdetails : for user's basic details questions
// // yourskills : for user's skills questions

// import  mongoose from 'mongoose';
// import { Question, User, Answer } from '../database/userDB.js'
// import { Router } from "express";

// const questionRouter = Router();

// mongoose.connect('mongodb+srv://aniketkumar6256:earthware0306@cluster0.lsqwmdr.mongodb.net/mentorMatch');

// // router.get('/setquestion', async(req, res) => {
// //   const questions = [
// //     {
// //       qid: "v1",
// //       text: 'What is the capital of France?',
// //       options: ['Paris', 'London', 'Berlin', 'Rome'],
// //       is_vibe_q: true
// //     },
// //     {
// //       qid: "v2",
// //       text: 'Which would you rather be?',
// //       options: ['Normal', 'Weird'],
// //       is_vibe_q: true
// //     },
// //     {
// //       qid: "v3",
// //       text: 'Are you modest?',
// //       options: ['Yes', 'No'],
// //       is_vibe_q: true
// //     },
// //     {
// //       qid: "v4",
// //       text: 'What is the capital of France1?',
// //       options: ['Paris', 'London', 'Berlin', 'Rome'],
// //       is_vibe_q: true
// //     },
// //     {
// //       qid: "v5",
// //       text: 'What is the capital of France2?',
// //       options: ['Paris', 'London', 'Berlin', 'Rome'],
// //       is_vibe_q: true
// //     },
// //     {
// //       qid: "v6",
// //       text: 'What is the capital of France3?',
// //       options: ['Paris', 'London', 'Berlin', 'Rome'],
// //       is_vibe_q: true
// //     },
// //     {
// //       qid: "v7",
// //       text: 'What is the capital of France4?',
// //       options: ['Paris', 'London', 'Berlin', 'Rome'],
// //       is_vibe_q: true
// //     },
// //     {
// //       qid: "v8",
// //       text: 'What is the capital of France5?',
// //       options: ['Paris', 'London', 'Berlin', 'Rome'],
// //       is_vibe_q: true
// //     },
// //     {
// //       qid: "v9",
// //       text: 'What is the capital of France6?',
// //       options: ['Paris', 'London', 'Berlin', 'Rome'],
// //       is_vibe_q: true
// //     },
// //     {
// //       qid: "v10",
// //       text: 'What is the capital of France7?',
// //       options: ['Paris', 'London', 'Berlin', 'Rome'],
// //       is_vibe_q: true
// //     }
// //     // Add more questions here...
// //   ];
  
// //   // Insert the questions into the database
// //   await Question.insertMany(questions)
// //     .then(insertedQuestions => {
// //       console.log('Questions inserted:', insertedQuestions.length);
// //     })
// //     .catch(err => {
// //       console.error('Error inserting questions:', err);
// //     });
// // })

// // // module.exports = router;

// questionRouter.post('/yourdetails', async(req, res) => {
//   const { email, password, firstName, lastName, username } = req.body
//   try {
//     const user = await User.create({
//       email: email,
//       password: password,
//       firstName: firstName,
//       lastName: lastName,
//       username: username
//     });
//     try {
//       const answer = await Answer.create({
//         question: 'd1',
//         answer: 'Yes',
//         acceptableAnswers: ['Yes', 'No'],
//         importance: 'high'
//       });
//     } catch (err) {
//     }
//     res.status(201).json({
//       message: 'User created successfully'
//     });
//   } catch (err) {   
//     res.status(500).json({ message: 'Error creating user' });
//   }



// questionRouter.get('/yourvibe', async(req, res) => {
//   // Get all questions from the database
//   try {
//     const question = await Question.find();
//     if (!question) {
//       return res.status(404).send({ message: 'Question not found' });
//     }
//     res.send(question);
//   } catch (err) {
//     res.status(500).send({ message: 'Server error' });
//   }

// })

// questionRouter.post('/yourvibe', async(req, res) => {
//   // the response from useer will be in the form of an array which includes the qid and the answer, acceptable answers, importance
//   // the response will be stored in the db
//   const { qid, answer, acceptableAnswers, importance } = req.body;
//   // const response = new Response({ qid, answer, acceptableAnswers, importance });

//   try {
//     // const savedResponse = await response.save();
//     await Answer.create({
//       question: qid,
//       answer: answer,
//       acceptableAnswers: acceptableAnswers,
//       importance: importance
//     });

//     res.status(201).json({
//       message: 'Response saved successfully'
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: 'Error saving response' });
//   }
// })





// export {questionRouter}
