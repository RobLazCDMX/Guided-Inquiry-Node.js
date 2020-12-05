'use strict';
 

// A node module that supports something similar to "cat myFile.txt | wc -l" . cat myFile.txt allow us to run the word count command (wc). The fs module allow us to read the number of lines in a document.
const fs = require('fs'); // we are requiring to use the fs module


// the readFileSync() allow us to read the file
let theWholeFile = fs.readFileSync(process.argv[2]);


// toString convert content of file to string
// split('\n') this splits the string at each new line
// length - 1 this reads the end of the file. It has to be -1 because the file does not have a boundary at the end of the last line so the it will go over one.
let linesInFile = theWholeFile.toString().split('\n').length - 1;

console.log(linesInFile);
 

// Given in the answer
// note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
