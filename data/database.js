import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendAPI",
    })
    .then((c) => console.log(`mongodb database connected with ${c.connection.host}`))
    .catch((err) => console.log(err));
};
