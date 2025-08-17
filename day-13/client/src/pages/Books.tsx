// Books.tsx - Updated component
import { useCallback, useEffect, useState } from "react";
import BookCard from "@/components/BookCard";
import type { IBook } from "@/content/BookContextProvider";
import { useAuth } from "@/hooks/useAuth";
import { useBooks } from "@/hooks/useBooks";
import { Loader2 } from "lucide-react"; 
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Books = () => {
  const navigate = useNavigate();
  const { addBooksToMyBooks: rawAddBook, books, isLoading } = useBooks();
  const { isAuth, isCheckingAuth } = useAuth();
  const [addingBookIds, setAddingBookIds] = useState<Set<string>>(new Set());

  const addBooksToMyBooks = useCallback(
    async (id: string) => {
      setAddingBookIds(prev => new Set(prev).add(id));
      try {
        await rawAddBook(id);
      } finally {
        setAddingBookIds(prev => {
          const newSet = new Set(prev);
          newSet.delete(id);
          return newSet;
        });
      }
    },
    [rawAddBook]
  );

  useEffect(() => {
    if (!isCheckingAuth && !isAuth) {
      navigate("/login");
    }
  }, [isAuth, isCheckingAuth, navigate]);

  if (isCheckingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <Loader2 className="animate-spin h-10 w-10 text-gray-600" />
      </div>
    );
  }

  return (

    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Available Books
      </h1>

      {/* Only show loading for initial book fetch */}
      {isLoading && !books?.length && (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="animate-spin h-10 w-10 text-gray-600" />
        </div>
      )}

      {books?.length > 0 && (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book: IBook) => (
            <BookCard
              key={book._id}
              _id={book._id}
              title={book.title}
              author={book.author}
              coverImage={book.coverImage}
              availability={book.availability}
              addBooksToMyBooks={addBooksToMyBooks}
              isAddingToMyBooks={addingBookIds.has(book._id!)}
            />
          ))}
        </div>
      )}

      {!isLoading && books?.length === 0 && (
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <p className="text-gray-500 text-lg">No books available right now.</p>
        </div>
      )}
    </div>
    </>
  );
};

export default Books;