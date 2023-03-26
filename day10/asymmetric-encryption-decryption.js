/*****************************************************************
 * Public Key used for encryption and private key for decryption *
 *****************************************************************/
//Including the required modules
var crypto = require("crypto");
var fs = require("fs");

//Reading the Public Key
pubK = privK = fs.readFileSync("public.pem").toString();

//Passing the text to be encrypted using private key
var buf = Buffer.from("This is secret code", "utf8");

//Encrypting the text
secretData = crypto.publicEncrypt(pubK, buf);
//printing the encrypted text
console.log(secretData.toString("utf8"));
//reading the Private key
privK = {
  key: fs.readFileSync("private.pem").toString(),
  passphrase: "Bupples",
};
//decrypting the text using public key
origData = crypto.privateDecrypt(privK, secretData);
//Printing the original content
console.log(origData.toString());

/**********************************************************************
 * Private Key used for encryption and public key used for decryption *
 **********************************************************************/
//Including the required modules
var crypto2 = require("crypto");
var fs2 = require("fs");

//Reading the Private Key
privK2 = {
  key: fs2.readFileSync("private.pem").toString(),
  passphrase: "Bupples",
};
//Passing the text to be encrypted using private key
var buf2 = Buffer.from("rishabh", "utf8");

//Encrypting the text
secretData2 = crypto2.privateEncrypt(privK2, buf2);
//printing the encrypted text
console.log(secretData2.toString("utf8"));
//reading the Public key
pubK2 = fs2.readFileSync("public.pem").toString();
//decrypting the text using public key
origData2 = crypto2.publicDecrypt(pubK2, secretData2);
//Printing the original content
console.log(origData2.toString());
