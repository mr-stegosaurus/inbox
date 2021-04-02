//Compile, test, deploy

//Functional tests that directly call different functions in our contract. They need to be effective.
//Use assertions to test contract.

const assert = require('assert');
const ganache = require('ganache-cli');
//This is ETH test network for contract deployment.
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile')
//web3 allows for ethereum programming within the network

let accounts;
let inbox;

beforeEach(async () => {
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // Use one of those accounts to deploy the contracts
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ from: accounts[0], gas: '1000000' })
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
    });
});
