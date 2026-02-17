import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";

import userRouter from "./routes/userRouter";

dotenv.config();

const app: Application = express();

// connect database
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
