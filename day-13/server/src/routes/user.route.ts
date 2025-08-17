import express from "express";
import { getCurrentUser, login, logout, register } from "../controllers/user.controllers.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', auth, logout);
router.get('/me', auth, getCurrentUser);

export default router;