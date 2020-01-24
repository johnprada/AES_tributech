var CryptoJS = require("crypto-js");
var my_msg = 'LywKay8STAM/SQw1C4g+sw';
var my_iv  = 'K34VFiiu0qar9xWICc9PPA';

// The AES encryption/decryption key to be used.
var AESKey = '2B7E151628AED2A6ABF7158809CF4F3C';

var plain_iv =  new Buffer( my_iv , 'base64').toString('hex');
var iv = CryptoJS.enc.Hex.parse( plain_iv );
var key= CryptoJS.enc.Hex.parse( AESKey );


// Decrypt
var bytes  = CryptoJS.AES.decrypt( my_msg, key , { iv: iv} );
var plaintext = bytes.toString(CryptoJS.enc.Base64);
var decoded_b64msg =  new Buffer(plaintext , 'base64').toString('ascii');
var decoded_msg =     new Buffer( decoded_b64msg , 'base64').toString('ascii');

console.log("Decryptedage: ", decoded_msg);
