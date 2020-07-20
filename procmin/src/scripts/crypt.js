/* Procmin.net crypt script
* By Pierre-Etienne ALBINET
* Started 20200707
* Changed 20200714 - Initiation
* Functions in I through IV are based on the tweetnacl.js by Dmitry Chestnykh => https://github.com/dchest/tweetnacl-js .
* To be reused without moderation - do not forget to include the 'nacl-fast-es.js' and 'nacl-util.js' files in the same folder
*/
'use strict'
//O. Import / Export
import nacl from "./nacl-fast-es.js";
import util from "./nacl-util.js";

const crypt = {};
export default crypt;

//I - Generic Hash
crypt.hash = function(text) {
    var Uint8ArrayText = util.decodeUTF8(text);
    var hashedArray = nacl.hash(Uint8ArrayText);
    var hashedText = util.encodeBase64(hashedArray);
    return hashedText;
};

//II - Generic Encryption with single key (secretbox)
const newSecretNonce = function() {
    var value = nacl.randomBytes(nacl.secretbox.nonceLength);
    return value;
};

crypt.newKey = function() {
    var value = util.encodeBase64(nacl.randomBytes(nacl.secretbox.keyLength));
    return value;
};

crypt.encrypt = function(text, key) {
    var textArray = util.decodeUTF8(text);
    var nonce = newSecretNonce();
    var keyArray = util.decodeBase64(key);
    
    var cryptedTextArray = nacl.secretbox(textArray, nonce, keyArray);
    
    var nonceAndCryptedTextArray = new Uint8Array(nonce.length + cryptedTextArray.length);
    nonceAndCryptedTextArray.set(nonce);
    nonceAndCryptedTextArray.set(cryptedTextArray, nonce.length);
    
    var nonceAndCryptedText = util.encodeBase64(nonceAndCryptedTextArray);
    return nonceAndCryptedText;
};

crypt.decrypt = function(nonceAndCryptedText, key) {
    var nonceAndCryptedTextArray = util.decodeBase64(nonceAndCryptedText);
    var cryptedText = nonceAndCryptedTextArray.slice(nacl.secretbox.nonceLength, nonceAndCryptedTextArray.length);
    var nonce = nonceAndCryptedTextArray.slice(0, nacl.secretbox.nonceLength);
    var keyArray = util.decodeBase64(key);
    
    var textArray = nacl.secretbox.open(cryptedText, nonce, keyArray);
    var text = util.encodeUTF8(textArray);
    return text;
};

//III - Message Encryption (box)
const newNonce = function() {
    var value = nacl.randomBytes(nacl.box.nonceLength);
    return value;
};

crypt.newKeyPair = function() {
    var value = nacl.box.keyPair();
    value.publicKey = util.encodeBase64(value.publicKey);
    value.secretKey = util.encodeBase64(value.secretKey);
    return value;
};

crypt.keyPairFromPrivateKey = function(privateKey) {
    var privateKeyArray = util.decodeBase64(privateKey);
    var value = nacl.box.keyPair.fromSecretKey(privateKeyArray);
    value.publicKey = util.encodeBase64(value.publicKey);
    value.secretKey = util.encodeBase64(value.secretKey);
    return value;
};

crypt.messageEncrypt = function(text, recipientPublicKey, senderPrivateKey) {
    var textArray = util.decodeUTF8(text);
    var nonce = newNonce();
    var recipientPublicKeyArray = util.decodeBase64(recipientPublicKey);
    var senderPrivateKeyArray = util.decodeBase64(senderPrivateKey);
    
    var cryptedTextArray = nacl.box(textArray, nonce, recipientPublicKeyArray, senderPrivateKeyArray);
    
    var nonceAndCryptedTextArray = new Uint8Array(nonce.length + cryptedTextArray.length);
    nonceAndCryptedTextArray.set(nonce);
    nonceAndCryptedTextArray.set(cryptedTextArray, nonce.length);
    
    var nonceAndCryptedText = util.encodeBase64(nonceAndCryptedTextArray);
    return nonceAndCryptedText;
};

crypt.messageDecrypt = function(nonceAndCryptedText, senderPublicKey, recipientPrivateKey) {
    var nonceAndCryptedTextArray = util.decodeBase64(nonceAndCryptedText);
    var cryptedTextArray = nonceAndCryptedTextArray.slice(nacl.box.nonceLength, nonceAndCryptedTextArray.length);
    var nonce = nonceAndCryptedTextArray.slice(0, nacl.box.nonceLength);
    var senderPublicKeyArray = util.decodeBase64(senderPublicKey);
    var recipientPrivateKeyArray = util.decodeBase64(recipientPrivateKey);
    
    var textArray = nacl.box.open(cryptedTextArray, nonce, senderPublicKeyArray, recipientPrivateKeyArray);
    var text = util.encodeUTF8(textArray);
    return text;
};

//IV - Message Signature (sign)
crypt.newSignKeyPair = function() {
    var value = nacl.sign.keyPair();
    value.publicKey = util.encodeBase64(value.publicKey);
    value.secretKey = util.encodeBase64(value.secretKey);
    return value;
};

crypt.signKeyPairFromPrivateKey = function(privateKey) {
    var privateKeyArray = util.decodeBase64(privateKey);
    var value = nacl.sign.keyPair.fromSecretKey(privateKeyArray);
    value.publicKey = util.encodeBase64(value.publicKey);
    value.secretKey = util.encodeBase64(value.secretKey);
    return value;
};

crypt.signMessage = function(message, privateKey) {
    var messageArray = util.decodeUTF8(message);
    var privateKeyArray = util.decodeBase64(privateKey);
    var signedMessageArray = nacl.sign(messageArray, privateKeyArray);
    var signedMessage = util.encodeBase64(signedMessageArray);
    return signedMessage;
};

crypt.unsignMessage = function(signedMessage, publicKey) {
    var signedMessageArray = util.decodeBase64(signedMessage);
    var publicKeyArray = util.decodeBase64(publicKey);
    var messageArray = nacl.sign.open(signedMessageArray, publicKeyArray);
    var message = util.encodeUTF8(messageArray);
    return message;
};

crypt.sign = function(message, privateKey) {
    var messageArray = util.decodeUTF8(message);
    var privateKeyArray = util.decodeBase64(privateKey);
    var signatureArray = nacl.sign.detached(messageArray, privateKeyArray);
    var signature = util.encodeBase64(signatureArray);
    return signature;
};

crypt.verify = function(message, signature, publicKey) {
    var messageArray = util.decodeUTF8(message);
    var signatureArray = util.decodeBase64(signature);
    var publicKeyArray = util.decodeBase64(publicKey);
    var verification = nacl.sign.detached.verify(messageArray, signatureArray, publicKeyArray);
    return verification;
};

//V - Key derivation from PassPhrase - PBKDF2

const PBKDF2key = async function(passArray) {
    var key = window.crypto.subtle.importKey(
        'raw',
        passArray,
        {
            name: 'PBKDF2',
        },
        false,
        ['deriveBits'],
    );
    return key;
};

crypt.deriveKey = async function(pass, salt, length) {
    var saltArray = util.decodeBase64(salt);
    var passArray = util.decodeUTF8(pass);
    var passKey = await PBKDF2key(passArray);
    var keyArray = await window.crypto.subtle.deriveBits(
    {
        'name': 'PBKDF2',
        salt: saltArray,
        'iterations': 100000,
        'hash': 'SHA-512'
    },
    passKey,
    length*8
    );
    var key = util.encodeBase64(new Uint8Array(keyArray));
    return key;
};

crypt.newDerivedKey = async function(pass, length) {
    var result = {};
    result.salt = util.encodeBase64(nacl.randomBytes(16));
    result.key = await crypt.deriveKey(pass, result.salt, length);
    return result;
};

