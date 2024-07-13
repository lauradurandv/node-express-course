//getting the built in file system module
const {writeFile, readFile } = require("fs").promises;

//3 lines
const content = `This is line 1, 
This is line dos,
Lastly line 3.`;

//async writer function
async function writer(){

    try{
        await writeFile('./temporary/temp.txt',content)
    }catch(error){
        console.log("An error occurred while writing the file: ",error)
    }
}

//async reader function
async function reader(){

    try{
       const newFile = await readFile('./temporary/temp.txt','utf-8')
       console.log(newFile)

    }catch(error){
        console.log("An error occurred while reading the file",error)
    }
}

//async write/read function
async function writeAndRead(){
    try{
        await writer()
        await reader()
    }catch(error){
        console.log("An error occured while reading and writing:",error)
    }
}

writeAndRead();