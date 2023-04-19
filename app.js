import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";

import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleWare } from "./middlewares/error.js";
import cors from "cors";


export const app = express();

config({
  path: "./data/config.env",
});
//use express.json() to parse json data
//using middleware for parsing json data
app.use(express.json());

//use cookie parser
app.use(cookieParser());

//using cors
app.use(cors({
  origin : [process.env.FRONTEND_URL],
  methods : ["GET", "POST", "PUT", "DELETE"],
  credentials : true,
}

));

//using routes
app.use("/api/v1/users/", userRouter);
app.use("/api/v1/task/", taskRouter);

app.get("/", (req, res) => {
  res.send("Noice");
});
//using error middleware
app.use(errorMiddleWare);
