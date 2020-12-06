'use strict';

const fs = require('fs');


fs.readFile("./planets.txt",  (err, response) => { 
  if (err) {
      console.log(err);
}
console.log(response.toString())
});



// In this option we store the parameter response in the const res and then we pass it to be log. In constrast, in the option up to we just log it directly without storing it in a variable.

// fs.readFile("./planets.txt",  (err, response) => { 
//   if (err) {
//     console.log(err);
// }

// const res = response.toString();
// console.log(res)
// });