import mongoose from 'mongoose';


const CommentSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String },
    created_at: { type: Date, default: Date.now }
});

const PostSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    content: String,
    published: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
    comments: [CommentSchema],
    shares: { type: Number, default: 0 }
});


const Post = mongoose.model('Post', PostSchema);

export {
    Post
}