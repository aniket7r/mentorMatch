// words for future: 
// commenting out skills related code because first fixing to the matching algo
// comented answers because at the time of creating user i had to put someeting to that too so whenever i need to use ansers i will just use that db folder






import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect('mongodb+srv://aniketkumar6256:earthware0306@cluster0.lsqwmdr.mongodb.net/mentorMatch');

// Define schemas
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
})


const SkillSchema = new mongoose.Schema({
    // Schema definition here
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    skills: {
        type: [String],
        required: true
    }
});

const AnswerSchema = new mongoose.Schema({
    //make it a forign key to link to the question id of question schema in admin
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    qId: {
        type: mongoose.Schema.Types.qid, // Reference to User model
        ref: 'Question',
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    acceptableAnswers: {
        type: [String],
        required: true
    },
    importance: {
        type: String,
        required: true
    }
})


// Define schema for questions
const QuestionSchema = new mongoose.Schema({
    qid: {
        type: String,
        required: true
    },
    question: {
    type: String,
    required: true
    },
    options: {
    type: [String], // Array of option texts
    required: true
    },
    is_vibe_q : {
        type: Boolean,
        required:true
    }
});

// Create a model for the question schema
const Question = mongoose.model('Question', QuestionSchema);
const Skills = mongoose.model('Skill', SkillSchema);
const User = mongoose.model('User', userSchema);
const Answer = mongoose.model('Answer', AnswerSchema);

export {
    Skills,
    User,
    Question,
    Answer
}




