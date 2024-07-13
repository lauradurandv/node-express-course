const {writeFile,readFile} = require("fs").promises;

writeFile('./temporary/temp.txt', "This is line one")
.then(() => {
    return writeFile('./temporary/temp.txt', "This is line two", { flag: 'a' });
})
.then(()=>{
    console.log("line 2 complete")
    return writeFile('./temporary/temp.txt', "This is line three.", { flag: 'a' });
})
.then(()=> {
    console.log("line 3 complete")
    return readFile('./temporary/temp.txt','utf-8');
})
.then((data)=>{
    console.log("Here is what inside the file:")
    console.log(data)
})
.catch((error) => {
    console.log("An error has occurred:", error)
})