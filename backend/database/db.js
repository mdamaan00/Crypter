import mongoose from "mongoose";

const Connection = async (MongoDB_URL) => {
  try {
    await mongoose.connect(MongoDB_URL);
    console.log("Database connected");
  } catch (error) {
    console.log("Database not connected:", error);
  }
};

export default Connection;
