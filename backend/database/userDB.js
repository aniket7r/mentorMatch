// words for future: 
// commenting out skills related code because first fixing to the matching algo
// comented answers because at the time of creating user i had to put someeting to that too so whenever i need to use ansers i will just use that db folder






import mongoose from 'mongoose';


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
    answers: [{
        qId: {
            type: String, // Reference to Question model
            ref: 'Question',
            required: true,
            is_unique: true
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
    }]
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

// Define the Notification Manager Schema
const notificationManagerSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['message', 'mentorship', 'follows'],
        required: true
    },
    status: {
        type: String,
        enum: ['unseen', 'accepted', 'rejected'],
        default: 'unseen',
        required: true
    },
    created_on: {
        type: Date,
        default: Date.now
    },
    updated_on: {
        type: Date,
        default: Date.now
    }
},
);

// Notification Schema
const notificationSchema = new mongoose.Schema({
userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    notifications: [{
        senderId: { type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
            required: true 
        },
        type: {
            type: String,
            required: true,
            enum: ['message', 'mentorship', 'follows']
        },
        created_on: { type: Date, default: Date.now },
        updated_on: { type: Date, default: Date.now },
        message: { type: String, required: true }
    }]
});

//.... Function to generate the message based on type and status
const generateMessage = (type, status, senderId) => {
    switch (type) {
        case 'message':
            if (status === 'unseen') return `You have a new message from ${senderId}`;
            break;
        case 'mentorship':
            if (status === 'unseen') return `You have a new mentorship request from ${senderId}`;
            // if (status === 'accepted') return `Your mentorship request has been accepted by ${senderId}`;
            // if (status === 'rejected') return `Your mentorship request has been rejected by ${senderId}`;
            break;
        case 'follows':
            if (status === 'unseen') return `You have a new follow request from ${senderId}`;
            // if (status === 'accepted') return `Your follow request has been accepted by ${senderId}`;
            // if (status === 'rejected') return `Your follow request has been rejected by ${senderId}`;
            break;
    }
    return '';
};

//.... Pre-save middleware to populate the notifications array
notificationManagerSchema.post('save', async function (doc) {
    if (doc.status === 'unseen') {
        const Notification = mongoose.model('Notification');
        const message = generateMessage(doc.type, doc.status, doc.sender);
        
        await Notification.updateOne(
            { userId: doc.receiver },
            {
                $push: {
                    notifications: {
                        senderId: doc.sender,
                        type: doc.type,
                        created_on: doc.created_on,
                        updated_on: doc.updated_on,
                        message
                    }
                }
            },
            { upsert: true }
        );
    }
});

// Mentorship Schema
const mentorshipSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    mentors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    mentees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});


//..... Pre-save middleware to populate mentorship data when status is accepted
notificationManagerSchema.post('save', async function (doc) {
    if (doc.status === 'accepted' && doc.type === 'mentorship') {
        const senderId = doc.sender;
        const receiverId = doc.receiver;

        // Update sender's mentorship data
        await Mentorship.updateOne(
            { userId: senderId },
            { $addToSet: { mentors: receiverId } },
            { upsert: true }
        );

        // Update receiver's mentorship data
        await Mentorship.updateOne(
            { userId: receiverId },
            { $addToSet: { mentees: senderId } },
            { upsert: true }
        );
    }
});

// Follow Schema

const followsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

//.....Pre-save middleware to populate the followers and following array

notificationManagerSchema.post('save', async function (doc) {
    if (doc.status === 'accepted' && doc.type === 'follows') {
        const senderId = doc.sender;
        const receiverId = doc.receiver;

        // Update sender's following data
        await Follows.updateOne(
            { userId: senderId },
            { $addToSet: { following: receiverId } },
            { upsert: true }
        );

        // Update receiver's followers data
        await Follows.updateOne(
            { userId: receiverId },
            { $addToSet: { followers: senderId } },
            { upsert: true }
        );
    }
});




// Create a model for the question schema
const User = mongoose.model('User', userSchema);
const Question = mongoose.model('Question', QuestionSchema);
const Skills = mongoose.model('Skill', SkillSchema);
const Answer = mongoose.model('Answer', AnswerSchema);
const NotificationManager = mongoose.model('NotificationManager', notificationManagerSchema);
const Notification = mongoose.model('Notification', notificationSchema);
const Mentorship = mongoose.model('Mentorship', mentorshipSchema);
const Follows = mongoose.model('Follows', followsSchema);





// Exporting the models

export {
    User,
    Skills,
    Question,
    Answer,
    NotificationManager,
    Notification,
    Mentorship,
    Follows
}




