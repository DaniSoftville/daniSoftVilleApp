import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("MongoDB Connected!");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
