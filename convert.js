const fs = require('fs');
const bs58 = require('bs58');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function b58ToUint8Array(b58PrivateKey) {
  try {
    const privateKeyBytes = bs58.decode(b58PrivateKey);
    return new Uint8Array(privateKeyBytes);
  } catch (error) {
    console.error('Invalid B58 private key:', error.message);
    return null;
  }
}

rl.question('Enter your B58 private key: ', (userInput) => {
  const privateKeyUint8Array = b58ToUint8Array(userInput);

  if (privateKeyUint8Array) {
    console.log('[' + privateKeyUint8Array.join(', ') + ']');
  } else {
    console.log('Invalid B58 private key provided.');
  }

  rl.close();
});