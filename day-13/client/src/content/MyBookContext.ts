import { createContext } from "react";


export interface MyBooks{
    _id: string;
    bookId: {
        _id: string;
        title: string;
        author: string;
        coverImage: string;
        availability: boolean;
    }
    status: "Want to Read" | "Currently Reading" | "Read";
    rating: number;
}


interface MyBookContextValue {
  myBooks:  MyBooks[]| [];
  fetchMyBooks: () => Promise<void>;
  changeMyBookStatus: (bookId: string, status: "Want to Read" | "Currently Reading" | "Read") => Promise<void>;
  changeMyBookRating: (bookId: string, rating: number) => Promise<void>;
  isLoading: boolean;
}

export const MyBookContext = createContext<MyBookContextValue | undefined>(undefined);