const chai = require('chai');
const getTotally = require('../../../Services/user/Helper/checkOut');
const sinon = require('sinon');
const { Order, Product } = require('../../../Services/user/database/models');
const mocks = require('../../Mocks/checkOut.mocks');
const sandBox = sinon.createSandbox();
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;
const instanceMethods = Order.prototype;
chai.should();

describe('#CheckOrderModel', () => {
  it('Return a promise when I added a product in a order', async () => {
    beforeEach(() => {
      sandBox.restore();
    });

    const order = sandBox.createStubInstance(Order);
    const product = sandBox.createStubInstance(Product);

    order.getItems.restore();
    order.save.restore();
    product.mapNeed.restore();

    sandBox.stub(product, 'mapNeed').callsFake(function () {
      return this
    });
    sandBox.stub(order, 'save').resolves();
    sandBox.stub(order, 'getItems').resolves(
      mocks.tryOne.map((i) => Object.assign({}, product, i))
    );

    await instanceMethods
      .checkOut.call(order)
      .should.be.fulfilled
      .then((result) => {
        console.log()
        result.should.to.be.a('object');
        result.items.should.to.be.an('array');
        result.items[0].code.should.to.be.a('string');
        result.items[0].price.should.to.be.a('number');
        result.total.should.to.be.a('number');
      });
  });
});