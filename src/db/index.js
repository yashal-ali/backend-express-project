import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const instance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("Connected with MONGODB: ", instance.connection.host);
  } catch (error) {
    console.log("Error in connecting with DB: ", error);
    process.exit(1);
  }
};

export default connectDB;