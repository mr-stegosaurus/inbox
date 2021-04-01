//Compile, test, deploy

//Functional tests that directly call different functions in our contract. They need to be effective.
//Use assertions to test contract.

const assert = require('assert');
const ganache = require('ganache-cli');
//This is ETH test network for contract deployment.
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
//web3 allows for ethereum programming within the network

//Test with Mohca

//class Car {
    park() {
        return 'stopped';
    }

    drive () {
        return 'vroom';
    }
}

//Declare variable globally, begins as undefined.
let car;

//This will start "before each" test.
//Assigns class Car to variable car
beforeEach(() => {
    car = new Car();
})

//Describe is just for grouping code together
describe('Car', () => {
    it('can park', () => {
        assert.equal(car.park(), 'stopped');
    })
    it('can drive', () => {
        assert.equal(car.drive(), 'vroom');
    })
});
