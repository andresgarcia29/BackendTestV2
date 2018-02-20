const mocha = require('mocha');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const getTotally = require('../../../Helper/checkOut');
const sinon = require('sinon');
const modelCheckOut = require('../../../database/models/');
const checkOut = new modelCheckOut();
const sandBox = sinon.createSandbox();

describe('#CheckOrderModel', () => {
  it('Return a promise when I added a product in a order', () => {
    beforeEach(() => {
      sandBox.stub(checkOut, 'checkOut').value(Promise.resolve());
    });
    console.log(checkOut.checkOut());
  });
});