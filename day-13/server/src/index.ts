import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
dotenv.config();

import userRoutes from "./routes/user.route.js"
import booksRoutes from "./routes/book.route.js"
import mybookRoutes from "./routes/mybook.route.js"

const app = express();

app.use(cookieParser())

const port = process.env.PORT || 3002;

app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true
    }
));
app.use(express.json());

connectDB()

// routes
app.get('/test', (req, res) => {
    res.send('ok')
})

app.use('/api/auth', userRoutes)
app.use('/api/books', booksRoutes)
app.use('/api/mybooks', mybookRoutes)

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})