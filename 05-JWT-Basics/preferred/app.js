require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const mainRouter = require("./routes/main");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1", mainRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
//port
const port = process.env.PORT || 3000;
//initalizing port
const start = async () => {
  try {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (error) {
    console.log(`Failed to initiate app.`);
    console.log(error);
  }
};

start();
