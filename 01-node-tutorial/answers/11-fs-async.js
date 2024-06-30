const { writeFile } = require('fs');
console.log("At start");

writeFile("./temporary/output.txt", "This is line 1\n", (err, result) => {
  if (err) {
    console.log("This error happened: ", err);
  } else {
    console.log('Printed line 1');
    console.log('Printing line 2');
    writeFile("./temporary/output.txt", "This is line 2\n",{ flag: 'as+' }, (err, result) => {
        if (err) {
            console.log("This error happened: ", err);
        } else {
            console.log('Printing line 3:');
            writeFile("./temporary/output.txt", "this is line 3\n",{ flag: 'as+' }, (err,result) => {
                if (err) {
                    console.log("This error happened:", err);
                } else {
                    console.log('All lines have been printed');
                }
            } )
        }
    })
  }
});
console.log("at end");