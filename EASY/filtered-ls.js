'use strict';

const fs = require('fs')


// node module that allow us to derive extensions from filenames
const path = require('path')
// console.log(path.extname('myFile.txt'))

const directory = process.argv[2]
const extention =  `.${process.argv[3]}`


// => is the callback function
fs.readdir(directory,  (err, files) => { // fs.readdir reads the directory
  if (err) return console.error(err)
  //forEach returns an Array of the files with the extention we are looking for
  files.forEach((file) => {
      if (path.extname(file) === extention) {
          console.log(file)
      }
  })
})



// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     'use strict'
//     const fs = require('fs')
//     const path = require('path')
    
//     const folder = process.argv[2]
//     const ext = '.' + process.argv[3]
    
//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })

