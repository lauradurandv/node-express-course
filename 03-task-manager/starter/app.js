const express = require("express");
const app = express();

//set up middleware
const tasks = require("./routes/task");
app.use(express.json());
const connectDB = require("./conectdb/connect");
require("dotenv").config();
//routes
app.get("/hello", (req, res) => {
  res.send("TASK MANAGER APP");
});

app.use("/api/v1/tasks", tasks);

//set up server
const port = 3000;

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
