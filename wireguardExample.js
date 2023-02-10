const wireguard = require('./WireGuardKeyGen/wireguard');

/*****************Alice****************/
//wireguard test
var public_private_wireguard= wireguard.wireguardKeypair.generateKeypair()
public_wireguard=public_private_wireguard.publicKey
privat_wireguard=public_private_wireguard.privateKey
console.log("public_wireguard",public_wireguard)
console.log("privat_wireguard",privat_wireguard)
