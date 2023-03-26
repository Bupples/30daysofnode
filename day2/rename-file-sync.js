var fs =  require('fs');
//you have to pass the Relative path of the file from the Current working directory.
fs.renameSync('old-rename-file-sync.txt', 'new-rename-file-sync.txt');
console.log('File renamed successfully');

// To check it's Synchronous nature !
console.log("This method is Synchronous");