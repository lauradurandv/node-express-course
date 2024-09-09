require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

//Error Middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");
//routes
app.get("/", (req, res) => {
  res.send('<h1>StoreAPI</h1><a href="/api/v1/products">products routes</a>');
});

app.use("/api/v1/products", productsRouter);
//product routes

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening to ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
