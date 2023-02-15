const net = require('net');
const crypto = require('crypto');
                                          //myhost: '206.189.18.1'
const client = net.createConnection({ host: 'localhost', port: 8080 }, () => {
  console.log('Connected to VPN server!');
/*
  // Generate a key for encrypting/decrypting data
  const key = crypto.randomBytes(32);

  // Create an encryptor and decryptor using the key
  const encrypt = crypto.createCipher('aes-256-cbc', key);
  const decrypt = crypto.createDecipher('aes-256-cbc', key);

  // Pipe data through encryptor before sending to VPN server
  client.pipe(encrypt).pipe(client);

  // Pipe data through decryptor after receiving from VPN server
  client.pipe(decrypt).pipe(process.stdout);

  // Write some data to the VPN server
  client.write('Hello VPN server!');
  */
 client.pipe(process.stdin);
});
