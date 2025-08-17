import mongoose, {Document, Schema, Types} from "mongoose"

export interface IMyBook extends Document {
    userId: Types.ObjectId
    bookId: Types.ObjectId
    status: 'Want to Read' | 'Currently Reading' | 'Read'
    rating: number
}

const myBookSchema: Schema<IMyBook> = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    status: {
        type: String,
        enum: ['Want to Read', 'Currently Reading', 'Read'],
        default: 'Want to Read',
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    }
})

const MyBook = mongoose.model<IMyBook>("MyBook", myBookSchema);

export default MyBook
