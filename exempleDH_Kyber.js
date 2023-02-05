var crypto = require("crypto");
const kyber = require('./kyber512');


/*****************Alice****************/
// To generate a public key for alice using DH
// the prime is shared by everyone                                              
var server = crypto.createDiffieHellman(512);
var prime = server.getPrime();
var alice = crypto.createDiffieHellman(prime);
alice.generateKeys();
var alicePub = alice.getPublicKey();
// To generate a public and private key pair (pk, sk) using kyber
var alice_pk_sk = kyber.KeyGen512()
let alice_pk = alice_pk_sk[0];//public
let alice_sk = alice_pk_sk[1];//private

/*****************Bob****************/
// To generate a public for bob using DH
var bob = crypto.createDiffieHellman(prime);
bob.generateKeys();
var bobPub = bob.getPublicKey();
// To generate a public and private key pair (pk, sk) using kyber
var bob_pk_sk = kyber.KeyGen512()
let bob_pk = bob_pk_sk[0];//public
let bob_sk = bob_pk_sk[1];//private

//alice sending message to bob
/****************************Kyber method **************************/
// To generate a random 256 bit symmetric key (ss) and its encapsulation (c)
let c_ss = kyber.Encrypt512(bob_pk);
let encapsulation_c = c_ss[0];//what we send to reciver (bob) is  encapsulation (c)
let symmetric_key1 = c_ss[1];// the secret 
// To decapsulate and obtain the same symmetric key
let symmetric_key2 = kyber.Decrypt512(encapsulation_c, bob_sk);//bob uses its private key and c to get the same secret
/****************************DH method **************************/
var bobAliceSecret = bob.computeSecret(alicePub);
var aliceBobSecret = alice.computeSecret(bobPub);

// public keys are different, but secret is common.   
// DH
if (bobPub != alicePub) { console.log("DH they are not equal") }
else { console.log("DH they should be not equal") }
// Kyber
if (alice_pk != bob_pk) { console.log("kyber they are not equal") }
else { console.log("kyber hey should be not equal") }
//DH
if (bobAliceSecret.equals(aliceBobSecret)) {
  console.log("encryption worked with DH")
}
//Kyber
if (symmetric_key1.equals(symmetric_key2)) {
  console.log("encryption worked with Kyber")
}
// use common secret as shared encryption key...                                
