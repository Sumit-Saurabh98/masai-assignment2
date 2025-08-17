import jwt from "jsonwebtoken"
import type { IUser } from "../models/user.model.js"
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET
export const generateToken = (user:IUser) =>{

    return jwt.sign({user}, process.env.JWT_SECRET!, {
        expiresIn: "15d"
    })
}