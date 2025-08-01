import mongoose from "mongoose";

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DataBase Connected");
    } catch (error) {
        console.log("Error in database connection")
    }
}

export default connectdb;