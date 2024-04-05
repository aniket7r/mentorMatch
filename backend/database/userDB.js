import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect('mongodb+srv://aniketkumar6256:earthware0306@cluster0.lsqwmdr.mongodb.net/mentorMatch');

// Define schemas
const SkillSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    skills : Array
});

const serVibeQ = new mongoose.Schema({
    question: Array,
})


const Skills = mongoose.model('skills', SkillSchema);

module.exports = {
    Skills
}



