import mongoose, {Document, Schema} from "mongoose"

export interface IBook extends Document {
    title: string
    author: string
    coverImage: string
    availability: boolean
}

const bookSchema: Schema<IBook> = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    availability: {
        type: Boolean,
        required: true,
    }
})

const Book = mongoose.model<IBook>("Book", bookSchema);

export default Book

