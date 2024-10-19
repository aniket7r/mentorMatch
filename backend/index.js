// import express from "express";
// // import http from "http";
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import mongoose from "mongoose";
// // import {questionRouter} from "./routes/questions.js";
// import { landingRouter } from "./routes/profile.js";
// import { networkRouter } from "./routes/network.js";
// import { postRouter } from "./routes/posts.js";
// import { matchRouter } from "./routes/match.js";
// // import { messageRouter } from "./routes/messages.js";
// // import { learnRouter } from "./routes/learnRoute.js";
// // import { teachRouter } from "./routes/teachRoute.js";
// // import { wsServer } from "./websocket/wsSocket.js";


// const app = express();
// // const server = http.createServer(app);
// app.use(cors({
//   origin: 'http://localhost:5173'
// }));

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://aniketkumar6256:earthware0306@cluster0.lsqwmdr.mongodb.net/mentorMatch');

// // wsServer(server);
// app.use(bodyParser.json());
// app.use(express.json());


// app.use("/api/v1", landingRouter)
// app.use("/api/v1/network", networkRouter)
// app.use("/api/v1/posts", postRouter)
// app.use("/api/v1/match", matchRouter)
// // app.use("/api/v1/messages", messageRouter)
// // app.use("/api/learn", learnRouter)
// // app.use|("/api/teach", teachRouter)
// // app.use("/api/v1", questionRouter)



// const port = 4000

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



//////////// ig final:
// backend/server.js
import express from "express";
import http from "http";
import { Server } from "socket.io";
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from "mongoose";
import { landingRouter } from "./routes/profile.js";
import { networkRouter } from "./routes/network.js";
import { postRouter } from "./routes/posts.js";
import { matchRouter } from "./routes/match.js";
import { messageRouter } from "./routes/message.js";
import { authenticateToken } from "./utils/auth.js";
import jwt from 'jsonwebtoken';
import { Message } from "./database/messageDB.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173'
  }
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://aniketkumar6256:earthware0306@cluster0.lsqwmdr.mongodb.net/mentorMatch');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Socket.io authentication middleware
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    return next(new Error("Authentication error"));
  }
  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) return next(new Error("Authentication error"));
    socket.user = decoded;
    next();
  });
});


// Socket.io event handling
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinRoom', ({ chatId }) => {
    socket.join(chatId);
    console.log(`User joined chat room: ${chatId}`);
  });

  socket.on('sendMessage', async (message) => {
    const newMessage = new Message({
      sender: socket.user._id,
      chatId: message.chatId,
      content: message.content,
      timestamp: new Date(),
    });
    await newMessage.save();
    io.to(message.chatId).emit('receiveMessage', newMessage);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.use("/api/v1", landingRouter);
app.use("/api/v1/network", networkRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/match", matchRouter);
app.use("/api/v1/messages", messageRouter);

const port = 4000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
