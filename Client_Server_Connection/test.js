//const { Wg } = require('wireguard-wrapper');
var wireguardTools = require("wireguard-tools")
/*
Wg.show().then(function(interfaces){
	console.log('all interfaces:', interfaces);
});


Wg.show('wg0').then(function(interfaces){
	console.log('wg0:', interfaces);
});
*/
 const { publicKey, privateKey, preSharedKey } =  function () { return wireguardTools.generateKeyPair({ preSharedKey: true }) }
console.log({ publicKey, privateKey, preSharedKey })
