import  mongoose from 'mongoose';
import Question from '../../database/adminDB.js'; // Assuming your model is defined in a separate file
import { Router } from "express";

const router = Router();


router.get('/question', async(req, res) => {
  const questions = [
    {
      qid: "v1",
      text: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome']
    },
    {
      qid: "v2",
      text: 'Which would you rather be?',
      options: ['Normal', 'Weird']
    },
    {
      qid: "v3",
      text: 'Are you modest?',
      options: ['Yes', 'No']
    },
    {
      qid: "v4",
      text: 'What is the capital of France1?',
      options: ['Paris', 'London', 'Berlin', 'Rome']
    },
    {
      qid: "v5",
      text: 'What is the capital of France2?',
      options: ['Paris', 'London', 'Berlin', 'Rome']
    },
    {
      qid: "v6",
      text: 'What is the capital of France3?',
      options: ['Paris', 'London', 'Berlin', 'Rome']
    },
    {
      qid: "v7",
      text: 'What is the capital of France4?',
      options: ['Paris', 'London', 'Berlin', 'Rome']
    },
    {
      qid: "v8",
      text: 'What is the capital of France5?',
      options: ['Paris', 'London', 'Berlin', 'Rome']
    },
    {
      qid: "v9",
      text: 'What is the capital of France6?',
      options: ['Paris', 'London', 'Berlin', 'Rome']
    },
    {
      qid: "v10",
      text: 'What is the capital of France7?',
      options: ['Paris', 'London', 'Berlin', 'Rome']
    }
    // Add more questions here...
  ];
  
  // Insert the questions into the database
  await Question.insertMany(questions)
    .then(insertedQuestions => {
      console.log('Questions inserted:', insertedQuestions.length);
    })
    .catch(err => {
      console.error('Error inserting questions:', err);
    });
})

// module.exports = router;

export default router;
