import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI!, {
            dbName:"masaibooks"
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Connect to db error", error);
        process.exit(1);
    }
}

export default connectDB