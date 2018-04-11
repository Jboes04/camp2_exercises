// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.
const path = require('path');
const fs = require('fs');

const pathfile = "/Users/Buzz/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs/juliantest.js";

function deleteFile (path) {
  fs.stat(path, (error, stats) => {
    if (error) {
      console.warn(error);
    } else ( stats.isFile(path));
  });
  fs.unlink(path, error => {
    if(error) {
      console.warn(error);
      return;
    }
    console.log('File Deleted');
  });
}

deleteFile(pathfile);
module.exports = deleteFile
