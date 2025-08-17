import express from "express";
import { getMyBooks, updateMyBookStatus, updateMyBookRating } from "../controllers/mybook.controlles.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/', auth, getMyBooks);
router.patch('/:bookId/status', auth, updateMyBookStatus);
router.patch('/:bookId/rating', auth, updateMyBookRating);

export default router;