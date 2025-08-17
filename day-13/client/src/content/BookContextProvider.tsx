import { useEffect, useState } from "react";
import { BookContext } from "./BookContext";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios";

export interface IBook {
    _id?: string;
    title: string;
    author: string;
    coverImage: string;
    availability: boolean;
}

export const BookContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchBooks() {
    setIsLoading(true);
    try {

      const response = await axiosInstance.get("/books");

      setBooks(response.data.books);

      setIsLoading(false);

    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message);
        setIsLoading(false);
      } else {
        toast.error("Please try again later");
        setIsLoading(false);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  async function addBooksToMyBooks(bookId: string) {
    setIsLoading(true);
    try {

        const response = await axiosInstance.post("/books/add", {
            bookId
        });

        console.log(response.data);

        toast.success(response.data.message);

        setIsLoading(false);

    } catch (error) {
        if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message);
        setIsLoading(false);
      } else {
        toast.error("Please try again later");
        setIsLoading(false);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return <BookContext.Provider value={{books, isLoading, fetchBooks, addBooksToMyBooks}}>{children}</BookContext.Provider>;
};
