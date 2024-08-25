//import mongoose
const mongoose = require('mongoose')
//function to connect to database
const connectDB = (url) => {
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;

