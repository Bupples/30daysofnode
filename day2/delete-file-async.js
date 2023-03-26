var fs = require('fs');
var filename = 'file-to-be-deleted-async.txt';
fs.unlink(filename, (err) => {
	if (err) 
		throw err;
	console.log('File deleted successfully');
});