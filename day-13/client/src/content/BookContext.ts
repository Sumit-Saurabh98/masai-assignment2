import { createContext } from "react";
import type { IBook } from "./BookContextProvider";
interface BookContextValue {
  books: IBook[] | [];
  fetchBooks: () => Promise<void>;
  addBooksToMyBooks: (bookId: string) => Promise<void>;
  isLoading: boolean;
}

export const BookContext = createContext<BookContextValue | undefined>(undefined);