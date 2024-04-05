import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import questionRouter from "./routes/adminRoutes/questions.js";


const app = express();
app.use(cors());

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Welcome to my server!');
  });
app.use("/admin", questionRouter)



const port = 4000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});











// module.exports = server