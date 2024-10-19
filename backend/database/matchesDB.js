import mongoose from "mongoose";

// Matches Schema
const matchSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    matches: {
        type: Map,
        of: mongoose.Schema({
            score: {
                type: Number,
                required: true
            },
            matchedUserIds: [{
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                    required: true
                },
                firstName: {
                    type: String,
                    ref: 'User',
                    required: true
                },
                lastName: {
                    type: String,
                    ref: 'User',
                    required: true
                }
        }]
        }),
        required: true
    }
});

// Creating Models
const Match = mongoose.model('Matches', matchSchema);

export {
    Match
};