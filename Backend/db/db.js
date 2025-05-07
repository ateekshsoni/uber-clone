import mongoose from "mongoose";

const connectToDb = async () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err.message);
    });
};
export default connectToDb;
