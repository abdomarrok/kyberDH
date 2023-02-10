
const kyber = require('./KyberAlgos/kyber512');

// To generate a public and private key pair (pk, sk) using kyber
var alice_pk_sk = kyber.KeyGen512()
let alice_pk = alice_pk_sk[0];//public
let alice_sk = alice_pk_sk[1];//private

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

// Kyber
if (alice_pk != bob_pk) { console.log("kyber they are not equal") }
else { console.log("kyber hey should be not equal") }

//Kyber
if (symmetric_key1.equals(symmetric_key2)) {
  console.log("encryption worked with Kyber")
}
// use common secret as shared encryption key...                                
