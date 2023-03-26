// Writing a File Asynchronously using nodejs
var fs =  require('fs');
var content= "Better Done Than Perfect.";
fs.writeFile('write-file-async-message.txt', content , (err) => {
	if (err) 
		throw err;
	console.log('It\'s saved!');
});