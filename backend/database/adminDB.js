import mongoose from 'mongoose';


// Define schema for questions
const QuestionSchema = new mongoose.Schema({
    qid: {
        type: String,
        required: true
    },
    text: {
    type: String,
    required: true
    },
    options: {
    type: [String], // Array of option texts
    required: true
    }
});

// Create a model for the question schema
const Question = mongoose.model('Question', QuestionSchema);

export default Question
