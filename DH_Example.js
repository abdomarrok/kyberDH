var crypto = require("crypto");
/*****************Alice****************/
// To generate a public key for alice using DH
// the prime is shared by everyone   
var server = crypto.createDiffieHellman(512);
var prime = server.getPrime();
var alice = crypto.createDiffieHellman(prime);
alice.generateKeys();
var alicePub = alice.getPublicKey();
/*****************Bob****************/
// To generate a public for bob using DH
var bob = crypto.createDiffieHellman(prime);
bob.generateKeys();
var bobPub = bob.getPublicKey();
/****************************DH method **************************/
var bobAliceSecret = bob.computeSecret(alicePub);
var aliceBobSecret = alice.computeSecret(bobPub);

// public keys are different, but secret is common.   
// DH
if (bobPub != alicePub) { console.log("DH they are not equal") }
else { console.log("DH they should be not equal") }
//DH
if (bobAliceSecret.equals(aliceBobSecret)) {
    console.log("encryption worked with DH")
  }