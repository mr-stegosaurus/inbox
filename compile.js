const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
//written in thism manner so that it resolves correctly on both Windows or Unix based systems.
const source = fs.readFileSync(inboxPath, 'utf8')

module.exports = solc.compile(source, 1).contracts[':Inbox'];

//After compiling, we need to test our contract.
