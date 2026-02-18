import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRouter from "./routes/userRouter";

import { loginLimiter } from "./middlewares/userMiddleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", loginLimiter, userRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
