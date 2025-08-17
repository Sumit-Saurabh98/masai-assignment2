
import MyBookCard from "@/components/MyBookCard";
import { useMyBook } from "@/hooks/useMyBook";

const MyBooks = () => {
  const { changeMyBookRating, changeMyBookStatus, isLoading, myBooks } =
    useMyBook();

    console.log(myBooks, "this is mybooks")

  if (isLoading) {
    return <h1 className="text-center text-lg">Loading your books...</h1>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {myBooks.length === 0 ? (
        <h1 className="col-span-full text-center text-lg">No books found</h1>
      ) : (
        myBooks.map((book) => (
          <MyBookCard
            key={book._id}
            _id={book._id}
            title={book.bookId.title}
            author={book.bookId.author}
            coverImage={book.bookId.coverImage}
            availability={book.bookId.availability}
            initialStatus={book.status}   // ✅ match context
            initialRating={book.rating}   // ✅ match context
            onStatusChange={changeMyBookStatus}
            onRatingChange={changeMyBookRating}
          />
        ))
      )}
    </div>
  );
};

export default MyBooks;
