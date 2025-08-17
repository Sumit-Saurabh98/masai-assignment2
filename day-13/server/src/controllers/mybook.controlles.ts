import type { NextFunction, Request, Response } from "express";
import tryCatch from "../config/trycatch.js";
import MyBook from "../models/mybook.model.js";

export const getMyBooks = tryCatch(async(req:Request, res:Response, next:NextFunction) => {
    
    const user = req.user

    if(!user){
        res.status(400).json({message:"Please login"})
        return
    }

    const myBooks = await MyBook.find({userId:user._id}).populate("bookId")

    console.log(myBooks, "ye books nhi hai kya")

    if(!myBooks){
        res.status(400).json({message:"some error during fetching books"})
        return
    }

    if(myBooks.length === 0){
        res.status(400).json({books:[], message:"No books found"})
        return
    }
    
    res.status(201).json({ books:myBooks, message:"You got the books successfully" });
})

export const updateMyBookStatus = tryCatch(async(req:Request, res:Response, next:NextFunction) => {


    const {status} = req.body

    const {bookId} = req.params

    console.log(bookId, status)

    if(!bookId || !status){
        res.status(400).json({message:"Please provide bookId and status"})
        return
    }

    const myBook = await MyBook.findOne({_id:bookId})

    if(!myBook){
        res.status(400).json({message:"No book found"})
        return
    }

    myBook.status = status

    await myBook.save()

    res.status(201).json({ message:"Status updated successfully" });
    
})

export const updateMyBookRating = tryCatch(async(req:Request, res:Response, next:NextFunction) => {


    const { rating} = req.body

    const {bookId} = req.params

    if(!bookId || !rating){
        res.status(400).json({message:"Please provide bookId and rating"})
        return
    }

    const myBook = await MyBook.findOne({_id:bookId})

    if(!myBook){
        res.status(400).json({message:"No book found"})
        return
    }

    myBook.rating = rating

    await myBook.save()

    res.status(201).json({ message:"Rating updated successfully" });
    
})

