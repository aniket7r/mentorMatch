import express from 'express';
import { Message } from '../database/messageDB.js';
import { authenticateToken } from '../utils/auth.js';

const router = express.Router();

router.get('/messages/:chatId', authenticateToken, async (req, res) => {
  try {
    const messages = await Message.find({ chatId: req.params.chatId }).sort('timestamp');
    res.json(messages);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/messages', authenticateToken, async (req, res) => {
  const newMessage = new Message({
    sender: req.user._id,
    chatId: req.body.chatId,
    content: req.body.content
  });
  try {
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(500).send(err);
  }
});

export { router as messageRouter };
