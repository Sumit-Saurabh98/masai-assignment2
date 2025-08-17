
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios";
import { MyBookContext, type MyBooks } from "./MyBookContext";

export const MyBookContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [myBooks, setMyBooks] = useState<MyBooks[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Fetch My Books
  async function fetchMyBooks() {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get("/mybooks");
      setMyBooks(response.data.books);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message || "Error fetching books");
      } else {
        toast.error("Please try again later");
      }
    } finally {
      setIsLoading(false);
    }
  }

  // ✅ Update Status
  async function changeMyBookStatus(
    bookId: string,
    status: "Want to Read" | "Currently Reading" | "Read"
  ) {
    try {
      const response = await axiosInstance.patch(`/mybooks/${bookId}/status`, {
        status,
      });

      setMyBooks((prev) =>
        prev.map((book) =>
          book._id === bookId ? { ...book, status } : book
        )
      );

      toast.success(response.data.message || "Book status updated");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message || "Error updating status");
      } else {
        toast.error("Please try again later");
      }
    }
  }

  // ✅ Update Rating
  async function changeMyBookRating(bookId: string, rating: number) {
    try {
      const response = await axiosInstance.patch(`/mybooks/${bookId}/rating`, {
        rating,
      });

      setMyBooks((prev) =>
        prev.map((book) =>
          book._id === bookId ? { ...book, rating } : book
        )
      );

      toast.success(response.data.message || "Book rating updated");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message || "Error updating rating");
      } else {
        toast.error("Please try again later");
      }
    }
  }

  useEffect(() => {
    fetchMyBooks();
  }, []);

  return (
    <MyBookContext.Provider
      value={{
        myBooks,
        fetchMyBooks,
        changeMyBookStatus,
        changeMyBookRating,
        isLoading,
      }}
    >
      {children}
    </MyBookContext.Provider>
  );
};
