const kyber = require('./KyberAlgos/kyber512');
const crypto = require('crypto');
const wireguard = require('./WireGuardKeyGen/wireguard');


//genrarte the wireguard keypair
const public_private_wireguard= wireguard.wireguardKeypair.generateKeypair()
public_wireguard=public_private_wireguard.publicKey
privat_wireguard=public_private_wireguard.privateKey

// To generate a public and private key pair (pk, sk) using kyber
const publickey_privatekey = kyber.KeyGen512()
let publickeyKyber = publickey_privatekey[0];//public
let privatekeyKyber = publickey_privatekey[1];//private
const bufferPK_wireguard = Buffer.from(public_wireguard);//base64 to buffer
const bufferPK_Kyber = Buffer.from(publickeyKyber);//arrayofbytes to buffer
console.log("bufferPK_wireguard",bufferPK_wireguard,"length ",bufferPK_wireguard.length);
console.log("\nbufferPK_Kyber",bufferPK_Kyber,"length ",bufferPK_Kyber.length);



c_ss = kyber.Encrypt512(publickeyKyber);//reciver public key
encapsulation_c = c_ss[0];//what we send to reciver is  encapsulation (c)
secret_key = c_ss[1];// the secret

/** 
function share_encapsulation_c(encapsulation_c)
{
   // to do
   // share the encapsulation_c with the peer
    }
*/

// Create a new cipher object
const cipher = crypto.createCipher('aes-256-ctr', secret_key);

// Encrypt the data
let encrypted_public_wireguard = cipher.update(public_wireguard, 'utf8', 'hex');
encrypted_public_wireguard += cipher.final('hex');

console.log('Encrypted public_wireguard:', encrypted_public_wireguard);
console.log('decrypted public_wireguard:', Buffer.from(crypto.Decipher('aes-256-ctr', secret_key).update(encrypted_public_wireguard, 'hex', 'utf8')));