//Path node module is another built in library allows us interact with file system
const path = require('path');

//return paltform specific seperator
console.log(path.sep);

//join method
const filePath = path.join('./content','./subfolder','first.txt');
console.log(filePath);

//base method: return the base of a path 
const base = path.basename(filePath);
console.log(base);

//resolve path: returns an absolute path
const absolute = path.resolve(__dirname,'content','./subfolder','first.txt');
console.log(absolute);
