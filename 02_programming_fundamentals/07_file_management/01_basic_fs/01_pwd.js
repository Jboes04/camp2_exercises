const path = require("path");

// Add a function `pwd` which takes no arguments and return the current folder name we are in
//
// Example
//
// pwd() # => "/Users/john/Workspace/my_folder"
//
// const fs = require("fs");
// fs.readline(process.cwd(), +"\\text.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data.toString());
//   }
// });

function pwd() {
  console.log(__dirname);
}
pwd();

module.exports = pwd
