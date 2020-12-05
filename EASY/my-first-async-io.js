'use strict';

const fs = require('fs');

// const theWholeFile = fs.readFile(process.argv[2]);

// const fs = require('fs')  
const theWholeFile = process.argv[2];  
  

// function in this case is a callback function. A function within a function that is executed only after the first function is executed
fs.readFile(theWholeFile, function (err, content) {  
  const newLines = content.toString().split('\n').length - 1  
  console.log(newLines)  
})



// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     'use strict'
//     const fs = require('fs')
//     const file = process.argv[2]
    
//     fs.readFile(file, function (err, contents) {
//       if (err) {
//         return console.log(err)
//       }
//       // fs.readFile(file, 'utf8', callback) can also be used
//       const lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })




