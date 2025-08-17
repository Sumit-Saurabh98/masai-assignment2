import express from "express";
import { addBooksToMyBooks, getBooks } from "../controllers/book.controllers.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', getBooks);
router.post('/add', auth, addBooksToMyBooks);

export default router;