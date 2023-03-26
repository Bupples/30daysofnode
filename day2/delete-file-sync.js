var fs = require('fs');
var filename = 'file-to-be-deleted-sync.txt';
fs.unlinkSync(filename);
console.log('File Deleted Successfully');