const CryptoJS = require("crypto-js");

module.exports = (ciphertext) => {
  var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
