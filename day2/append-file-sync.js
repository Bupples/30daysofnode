//file append operation in nodejs
var fs = require('fs');
var content = "We are Appending this file synchronously using node.js (line 2)";
fs.appendFileSync('append-file-sync.txt', content);
console.log("File Appended Successfully");