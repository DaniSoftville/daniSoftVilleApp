import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/dbConn.js";
import userRoute from "./routes/user.js";

import authRoute from "./routes/auth.js";
/* import conversationRoute from "./routes/conversation.js";
import gigRoute from "./routes/gig.js";
import messageRoute from "./routes/message.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.js"; */

const app = express();

dotenv.config();
mongoose.set("strictQuery", true);
connectDB();
app.use(express.json()); //Used to send users inputs(req.body) from postman
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
/* app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute); */
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});
app.listen(8000, () => {
  console.log("Backend server is running on port 8000");
});