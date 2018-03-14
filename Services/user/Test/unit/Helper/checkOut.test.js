const mocha = require('mocha');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const getTotally = require('../../../Helper/checkOut');
const mocks = require('../../Mocks/checkOut.mocks');

describe('CheckOutHelper', () => {
  it('Check the first disscount', () => {
    const totally = getTotally(mocks.tryOne);;
    assert.equal(totally, 32.5);
  });
  it('Check the second disscount', () => {
    const totally = getTotally(mocks.tryTwo);
    assert.equal(totally, 74.5);
  });
  it('Check the third disscount', () => {
    const totally = getTotally(mocks.tryThree);
    assert.equal(totally, 25);
  });
});