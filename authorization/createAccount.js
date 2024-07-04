const StellarSdk = require('stellar-sdk');
const fetch = require('node-fetch');

// Create a new keypair
const pair = StellarSdk.Keypair.random();

console.log('Public Key:', pair.publicKey());
console.log('Secret Key:', pair.secret());

// Fund the account using Friendbot
const friendbotUrl = `https://friendbot.stellar.org?addr=${encodeURIComponent(pair.publicKey())}`;

fetch(friendbotUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log('SUCCESS! You have a funded test account.');
    console.log(data);
  })
  .catch((error) => {
    console.error('ERROR!', error);
  });
