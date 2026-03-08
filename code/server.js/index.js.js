require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

const errorMiddleware = require("./Middlewares/errorMiddleware");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;
const Mongo_Url = process.env.MONGO_URL;

const authRoute = require("./Router/AuthRouter");
const GoalRouter = require("./Router/GoalRouter");

// MongoDB connection
mongoose
  .connect(Mongo_Url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", authRoute);
app.use("/api/goals", GoalRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});