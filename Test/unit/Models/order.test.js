const chai = require('chai');
const getTotally = require('../../../Helper/checkOut');
const sinon = require('sinon');
const { Order, Product } = require('../../../database/models/');
const mocks = require('../../Mocks/checkOut.mocks');
const sandBox = sinon.createSandbox();
const chaiAsPromised = require("chai-as-promised");

const instanceMethods = Order.prototype;
chai.use(chaiAsPromised);
chai.should();

describe('#CheckOrderModel', () => {
  it('Return a promise when I added a product in a order', () => {
    beforeEach(() => {
      sandBox.restore();
      
    });
    const order = sandBox.createStubInstance(Order);
    const product = sandBox.createStubInstance(Product);

    order.getItems.restore();
    product.mapNeed.restore();
    order.save.restore();
    
    sandBox.stub(order, 'getItems').resolves(mocks.tryOne);
    sandBox.stub(product, 'mapNeed').resolves(mocks.tryOne.map(e => { e.price, e.code }));
    sandBox.stub(order, 'save').resolves();

    instanceMethods
      .checkOut.call(order)
      .should.be.fulfilled
      .then((result) => {
        // Problems with this
      });
  });
});