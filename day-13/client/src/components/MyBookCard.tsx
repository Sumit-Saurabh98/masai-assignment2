import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Star } from "lucide-react";

export interface MyBookCardProps {
  _id: string;
  title: string;
  author: string;
  coverImage: string;
  availability: boolean;
  initialStatus: "Want to Read" | "Currently Reading" | "Read";
  initialRating: number;
  onStatusChange?: (
    id: string,
    status: "Want to Read" | "Currently Reading" | "Read"
  ) => void;
  onRatingChange?: (id: string, rating: number) => void;
}

const MyBookCard = ({
  _id,
  title,
  author,
  coverImage,
  initialStatus,
  initialRating,
  onStatusChange,
  onRatingChange,
}: MyBookCardProps) => {

  const [status, setStatus] = useState(initialStatus);
  const [rating, setRating] = useState(initialRating);

  const handleStatusChange = (
    newStatus: "Want to Read" | "Currently Reading" | "Read"
  ) => {
    setStatus(newStatus);
    onStatusChange?.(_id, newStatus);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    onRatingChange?.(_id, newRating);
  };

  return (
    <Card className="w-full rounded-2xl shadow-lg overflow-hidden">
      {/* Book Cover */}
      <div className="w-full h-56 bg-gray-100">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">by {author}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Reading Status */}
        <div>
          <label className="text-sm font-medium">Reading Status</label>
          <Select
            value={status}
            onValueChange={(val) =>
              handleStatusChange(
                val as "Want to Read" | "Currently Reading" | "Read"
              )
            }
          >
            <SelectTrigger className="mt-1 w-full">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Want to Read">Want to Read</SelectItem>
              <SelectItem value="Currently Reading">Currently Reading</SelectItem>
              <SelectItem value="Read">Read</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Rating */}
        <div>
          <label className="text-sm font-medium">Rating</label>
          <div className="flex items-center space-x-1 mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-6 h-6 cursor-pointer transition-colors ${
                  star <= rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-400"
                }`}
                onClick={() => handleRatingChange(star)}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MyBookCard;
