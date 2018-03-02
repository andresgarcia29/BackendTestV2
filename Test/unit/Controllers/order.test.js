const { createOrder } = require('../../../Services/user/Api/Controllers/order');
const OrderController = require('../../../Services/user/Api/Controllers/order');
const chai = require('chai');
const sinon = require('sinon');
const sandBox = sinon.createSandbox();
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;
const { Order, Product } = require('../../../Services/user/database/models/');
const mocks = require('../../Mocks/controllers/order.controller');
chai.should();

describe('Test to OrderController', async () => {

  beforeEach(() => {
    sandBox.restore();
  });


  it('Should create a new order', async () => {
    const callback = sandBox.spy();
    sandBox.stub(Order, 'create').resolves(mocks.orderCreate);
    return OrderController.createOrder(mocks.orderCreateCall, callback)
    .should.be.fulfilled
    .then(() => {
      assert(callback.calledOnce);
      expect(callback.args[0][0]).to.be.a('null');
      expect(callback.args[0][1]).to.be.a('number');
    });
  });

  it('Should create a new order is rejected', async () => {
    const callback = sandBox.spy();
    sandBox.stub(Order, 'create').rejects();
    return OrderController.createOrder(mocks.orderCreateRejected, callback)
      .should.be.fulfilled
      .then(() => {
        expect(callback.args[0]).to.be.a('array');
        assert(callback.calledOnce);
      });
  });

  it('Should add product to order', async () => {
    const callback = sandBox.spy();
    sandBox.stub(Order, 'findById').resolves(mocks.addProductOrderOrder);
    sandBox.stub(Product, 'findById').resolves(mocks.addProductOrderProduct);
    return OrderController.addProduct(mocks.addProductRequest, callback)
    .should.be.fulfilled
    .then(() => {
      expect(callback.args[0][1]).to.be.an('object');
      expect(callback.args[0][1].id).to.be.a('number');
      expect(callback.args[0][1].payed).to.be.a('boolean');
      expect(callback.args[0][1].userId).to.be.a('number');
      expect(callback.args[0][1].totally).to.be.a('number');
      assert(callback.calledOn);
    });
  });

  it('Should add product to order', async () => {
    const callback = sandBox.spy();
    sandBox.stub(Order, 'findById').rejects(mocks.addProductOrderOrder);
    sandBox.stub(Product, 'findById').rejects(mocks.addProductOrderProduct);
    return OrderController.addProduct(mocks.addProductRequest, callback)
      .should.be.fulfilled
      .then(() => {
        expect(callback.args[0]).to.be.a('array');
        assert(callback.calledOn);
      });
  });

  it('Should get some order', async () => {
    const callback = sandBox.spy();
    sandBox.stub(Order, 'findById').resolves(mocks.getOrder);
    return OrderController.getOrder({request: { id: 1 }}, callback)
    .should.be.fulfilled
    .then(() => {
      expect(callback.args[0][1]).to.be.an('object');
      expect(callback.args[0][1].id).to.be.a('number');
      expect(callback.args[0][1].payed).to.be.a('boolean');
      expect(callback.args[0][1].userId).to.be.a('number');
      expect(callback.args[0][1].totally).to.be.a('number');
      assert(callback.calledOn);
    });
  });

  it('Should get some order when is reject', async () => {
    const callback = sandBox.spy();
    sandBox.stub(Order, 'findById').resolves(mocks.getOrder);
    return OrderController.getOrder({ request: {  id: 1 } }, callback)
      .should.be.fulfilled
      .then(() => {
        expect(callback.args[0]).to.be.a('array');
        assert(callback.calledOn);
      });
  });

});
