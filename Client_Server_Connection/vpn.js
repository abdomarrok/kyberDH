const net = require('net');
const crypto = require('crypto');

const server = net.createServer((client) => {
  console.log('VPN client connected!');
/*
// Create a decryptor for the incoming data
  const decrypt = crypto.createDecipher('aes-256-cbc', client.key);

  // Create an encryptor for the outgoing data
  const encrypt = crypto.createCipher('aes-256-cbc', client.key);

  // Pipe data through decryptor before processing
  client.pipe(decrypt).pipe(process.stdout);

  // Pipe data through encryptor before sending back to client
  client.pipe(encrypt).pipe(client);
  */
 client.pipe(process.stdout);

});

server.listen(8080, () => {
  console.log('VPN server listening on port 8080!');
});


