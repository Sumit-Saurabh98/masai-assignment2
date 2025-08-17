import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import User from "../models/user.model.js";
import type { Types } from "mongoose";

const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.cookies._masai_books_token;

    if (!token) {
      res.status(401).json({ message: "Unauthorized - no token provided" });
      return; 
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

    if (!decoded) {
      res.status(401).json({
        message: "Unauthorized - invalid token provided",
      });
      return; 
    }

    const user = await User.findById(decoded.user._id);

    if (!user) {
      res.status(401).json({ message: "Unauthorized - user not found" });
      return;
    }

    req.user = { _id: user._id as Types.ObjectId, email: user.email };
    
    next();
  } catch (error) {
    console.log("Error in auth middleware :- ", error);

    if (error instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ message: "Unauthorized - invalid token provided" });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
    return;
  }
};

export default auth;