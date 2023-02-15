const crypto = require('crypto');

// The pre-shared key
const presharedKey = Buffer.from('64 53 ea be a6 12 c4 bd f5 62 8a 31 ad a7 66 80 29 22 82 30 f6 95 e5 c6 fc 3c 0e 19 0e 68 af 9d', 'hex');

// The data to be encrypted
const data = 'secret message';

// Create a new cipher object
const cipher = crypto.createCipher('aes-256-ctr', presharedKey);

// Encrypt the data
let encrypted = cipher.update(data, 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('Encrypted data:', encrypted);