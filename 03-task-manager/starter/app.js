const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectDB = require("./conectdb/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/errorHandler");

//Middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

//set up server
//in terminal: PORT=XXXX node app.js
//to set a specific port, which keeps port num private
const port = process.env.PORT || 3000;

//function: connect to database then start server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

//start
start();
