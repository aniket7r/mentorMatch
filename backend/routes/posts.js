import express from "express";
import { Post } from "../database/postsDB.js";
const postRouter = express.Router();
import zod from "zod";



const postBody = zod.object({
    userId: zod.string(),
    title: zod.string(),
    content: zod.string(),
    published: zod.boolean().default(false),
    likes: zod.number().default(0),
    comments: zod.array(zod.object({
        userId: zod.string(),
        content: zod.string(),
        created_at: zod.date().default(() => new Date())
    })).default([]),
    shares: zod.number().default(0)
});

// Create a new post
postRouter.post('/', async (req, res) => {
    try {
        const { success, data } = postBody.safeParse(req.body)
        if (!success) {
            return res.status(411).json({
                message: "Incorrect inputs"
            });
        }
        const newPost = new Post({
            userId: data.userId,
            title: data.title,
            content: data.content,
            published: data.published,
            likes: data.likes,
            comments: data.comments,
            shares: data.shares
        });
        await newPost.save();
        res.status(201).send(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

// Get all posts
postRouter.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('userId').populate('comments.userId');
        res.send(posts);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

// Get a single post by ID
postRouter.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('userId').populate('comments.userId');
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.send(post);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

// Update a post by ID
postRouter.put('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.send(post);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

// Delete a post by ID
postRouter.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.send({ message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

// Like a post
postRouter.post('/:id/like', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.likes += 1;
        await post.save();
        res.send(post);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

// Comment on a post
postRouter.post('/:id/comment', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.comments.push(req.body);
        await post.save();
        res.send(post);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});

// Share a post
postRouter.post('/:id/share', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.shares += 1;
        await post.save();
        res.send(post);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error });
    }
});


export { postRouter };