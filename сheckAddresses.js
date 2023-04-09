
const fs = require('fs');

const addresses = JSON.parse(fs.readFileSync('addresses.json'));

const files = ['arbitrum.json', 'bsc.json', 'ethereum.json', 'optimism.json', 'polygon.json'];

for (const file of files) {
  const data = JSON.parse(fs.readFileSync(file));
  for (const address of addresses) {
    if (data.includes(address)) {
      console.log('\x1b[31m%s\x1b[0m', `${address} found in ${file}`);
    }
  }
}
