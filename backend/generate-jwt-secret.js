const crypto = require('crypto');

function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
}

const jwtSecret = generateRandomString(64); // Generate a 64-character random string

console.log('Generated JWT Secret:', jwtSecret);
