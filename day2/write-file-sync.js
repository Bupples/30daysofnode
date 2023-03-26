var fs = require('fs');

var content = "Perfect Practice Makes Perfect.";

fs.writeFileSync('write-file-sync-message.txt', content);
console.log("File Written Successfully");