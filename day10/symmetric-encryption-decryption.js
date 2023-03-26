var crypto = require("crypto"),
  algorithm = "aes-256-ctr",
  // Defining key
  key = crypto.randomBytes(32),
  // Defining iv
  iv = crypto.randomBytes(16);
//Here "aes-256-cbc" is the advance encryption standard we are using for encryption.
//Text is the Confidential data which we need to encrypt using 'password'(Key).

function encrypt(text) {
  var cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  var crypted = cipher.update(text, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
}

//Here "aes-256-cbc" is the advance encyption standard we used for encrytion.
//Text is the Cipher which we need to decrypt using 'password'(Key).
function decrypt(text) {
  var decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
  var dec = decipher.update(text, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
}

//Actual content
var text = "NodeJS rocks!";
//Calling the encrypt function and printing the encrypted content
var e = encrypt(text);
console.log(e);
//calling the decrypt function and printing the decrypted content
var d = decrypt(e);
console.log(d);
