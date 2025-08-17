// BookCard.tsx - Updated component
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { IBook } from "@/content/BookContextProvider"
import { memo } from "react";
import { Loader2 } from "lucide-react";

interface BookCardProps extends IBook {
  addBooksToMyBooks: (bookId: string) => Promise<void>;
  isAddingToMyBooks?: boolean;
}

const BookCard = memo(({ 
  _id, 
  title, 
  author, 
  coverImage, 
  availability, 
  addBooksToMyBooks,
  isAddingToMyBooks = false
}: BookCardProps) => {
  console.log("Rendering:", title); // debug
  
  return (
    <Card className="w-full h-full rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
      {/* Book Cover */}
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={coverImage} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>

      {/* Book Info */}
      <CardHeader className="p-4 flex-1">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500">{author}</p>
      </CardHeader>

      {/* Button */}
      <CardContent className="px-4 pb-4">
        <Button 
          className="w-full" 
          disabled={!availability || isAddingToMyBooks}
          onClick={() => addBooksToMyBooks(_id!)}
        >
          {isAddingToMyBooks ? (
            <>
              <Loader2 className="animate-spin h-4 w-4 mr-2" />
              Adding...
            </>
          ) : (
            "Want to Read"
          )}
        </Button>
      </CardContent>
    </Card>
  )
})

BookCard.displayName = "BookCard";

export default BookCard