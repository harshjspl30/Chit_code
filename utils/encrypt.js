const CryptoJS = require("crypto-js");
module.exports = (text) => {
  var ciphertext = CryptoJS.AES.encrypt(text, "secret key 123").toString();
  return ciphertext;
};
