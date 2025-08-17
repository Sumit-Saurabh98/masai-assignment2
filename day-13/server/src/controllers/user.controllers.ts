import type { NextFunction, Request, Response } from "express";
import tryCatch from "../config/trycatch.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../config/token.js";


export const register = tryCatch(async(req:Request, res:Response, next:NextFunction) => {
    
    const {email, password} = req.body

    if(!email || !password){
        res.status(400).json({message:"Please provide email and password"})
        return
    }

    const existingUser = await User.findOne({email})

    if(existingUser){
        res.status(400).json({message:"User already exists"})
        return
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = await User.create({ email, password: hashedPassword });

    const token = generateToken(newUser)

    res.cookie("_masai_books_token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });


     const { password: _, ...userWithoutPassword } = newUser.toObject();


    
    res.status(201).json({ user: userWithoutPassword, token, message:"User registered successfully" });
})

export const login = tryCatch(async(req:Request, res:Response, next:NextFunction) => {
    
    const {email, password} = req.body

    if(!email || !password){
        res.status(400).json({message:"Please provide email and password"})
        return
    }

    const existingUser = await User.findOne({email})

    if(!existingUser){
        res.status(400).json({message:"User does not exist. Please register"})
        return
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

    if(!isPasswordCorrect){
        res.status(400).json({message:"Incorrect email or password"})
        return
    }

    const token = generateToken(existingUser)

    res.cookie("_masai_books_token", token, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

 const {password:_, ...userWithoutPassword} = existingUser.toObject();
    
    res.status(201).json({ user: userWithoutPassword, token, message:"User logged in successfully" });
})

export const getCurrentUser = tryCatch(async(req:Request, res:Response, next:NextFunction) => {
    
    const user = req.user

    if(!user){
        res.status(400).json({message:"Please login"})
        return
    }
    
    res.status(201).json({ user: user, message:"User got successfully" });
})

export const logout = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;

  if (!user) {
    return res.status(400).json({ message: "Please login" });
  }

  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({ message: "Logout successfully" });
});
