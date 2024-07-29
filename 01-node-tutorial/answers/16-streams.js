//require from fs module
const {createReadStream} = require('fs');

//create new var, invoke 
//Arg 1: path
//Arg 2: Can change the buffer with highwaterMark
//Arg 3: encoding
const stream = createReadStream('../content/big.txt', {highWaterMark:200, encoding:'utf-8'});

//reading data in chucks by default in 64kb

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error',(error)=>{
    console.log(error)
})