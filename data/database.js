import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendAPI",
    })
    .then(() => console.log("mongodb database connected"))
    .catch((err) => console.log(err));
};
