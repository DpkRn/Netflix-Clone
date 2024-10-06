import mongoose from "mongoose"
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config();
const app = express();

//middlewares
app.use(
  cors({
    origin: [process.env.ORIGIN],
    secure: true,
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  return res.send("welcome to netfilx page !");
});

//apis
app.use("/api/v1/user", userRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connection done !");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log("listening to port http://localhost:8080");
});
