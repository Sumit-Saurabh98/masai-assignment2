import type { NextFunction, Request, Response } from "express";
import tryCatch from "../config/trycatch.js";
import Book from "../models/book.model.js";
import MyBook from "../models/mybook.model.js";


export const getBooks = tryCatch(async(req:Request, res:Response, next:NextFunction) => {
    
    const books = await Book.find()

    if(!books){
        res.status(400).json({message:"some error during fetching books"})
        return
    }

    if(books.length === 0){
        res.status(400).json({books:[], message:"No books found"})
        return
    }
    
    res.status(201).json({ books, message:"You got the books successfully" });
})

export const addBooksToMyBooks = tryCatch(async(req:Request, res:Response, next:NextFunction) => {

    if (!req.user) {
    res.status(401).json({ message: "Unauthorized, please login first" });
    return;
  }

  const userId = req.user._id;
  const { bookId } = req.body;

  const book = await Book.findById(bookId);

  if (!book) {
    res.status(404).json({ message: "Book not found" });
    return;
  }

  const existingMyBook = await MyBook.findOne({ userId, bookId });

  if (existingMyBook) {
    res.status(400).json({ message: "Book already exists in MyBooks" });
    return;
  }

  const myBook = await MyBook.create({ userId, bookId });

  res.status(201).json({ myBook, message: "Book added to MyBooks successfully" });
})
