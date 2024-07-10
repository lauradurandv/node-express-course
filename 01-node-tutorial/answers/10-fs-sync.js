//Using file sync module

//destructing the methods
const {readFileSync, writeFileSync} = require('fs');

//reading from file system
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

//console.log(first,second);

//writing to a file
//takes two arguments 1:file name, 2:input

//Example
writeFileSync('./temporary/fileA.txt',`Here is the first line: ${first}`)
writeFileSync('./temporary/fileA.txt',`Here is the second line: ${second}`,{ flag: 'a'})
writeFileSync('./temporary/fileA.txt','Here is the third line',{ flag: 'a'})
//reading the file just created
const newFile = readFileSync('./temporary/fileA.txt','utf-8');
console.log(newFile);