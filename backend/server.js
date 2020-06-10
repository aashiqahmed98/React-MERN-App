// We used nodemon,which starts the server with the changes

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); //Used to connect to mongodb
require("dotenv").config(); //To use dotenv for sensitive information and config it

const app = express();
const port = process.env.PORT || 5200;

app.use(cors()); //cors middleware

app.use(express.json()); //Used to parse json,as server will be sending and receiving json

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

// For every connection afer a particular time/session whitlist the ip addr in atlas
connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

// Defining routes
const exerciseRouter = require("./routes/exercises");
const userRouter = require("./routes/users");

app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is started at port: ${port}`);
});
