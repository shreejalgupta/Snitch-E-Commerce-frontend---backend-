import mongoose from "mongoose"
import config from "./config.js"

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("DataBase is connected");
    } catch (error) {
        console.log("DataBase is not connected ", error)
    }
}

export default connectDB