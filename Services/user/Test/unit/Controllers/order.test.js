const { createOrder } = require('../../../Api/Controllers/order');
const OrderController = require('../../../Api/Controllers/order');
const chai = require('chai');
const sinon = require('sinon');
const sandBox = sinon.createSandbox();
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;
const { Order, Product } = require('../../../database/models');
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
      Order.create.calledOnceWith(mocks.orderCreate);
      callback.calledOnce;
      callback.args[0][1].should.to.be.a('number');
    });
  });

  it('Should create a new order is rejected', async () => {
    const callback = sandBox.spy();
    sandBox.stub(Order, 'create').rejects();
    return OrderController.createOrder(mocks.orderCreateRejected, callback)
      .should.be.fulfilled
      .then(() => {
        callback.args[0].should.to.be.a('array');
        callback.calledOnce;
      });
  });

  it('Should add product to order', async () => {
    const callback = sandBox.spy();
    sandBox.stub(Order, 'findById').resolves(mocks.addProductOrderOrder);
    sandBox.stub(Product, 'findById').resolves(mocks.addProductOrderProduct);
    return OrderController.addProduct(mocks.addProductRequest, callback)
    .should.be.fulfilled
    .then(() => {
      Order.findById.calledOnceWith(mocks.addProductOrderOrder);
      Product.findById.calledOnceWith(mocks.addProductOrderProduct);
      callback.args[0][1].should.to.be.an('object');
      callback.args[0][1].id.should.to.be.a('number');
      callback.args[0][1].payed.should.to.be.a('boolean');
      callback.args[0][1].userId.should.to.be.a('number');
      callback.args[0][1].totally.should.to.be.a('number');
      callback.calledOn;
    });
  });

  it('Should add product to order', async () => {
    const callback = sandBox.spy();
    sandBox.stub(Order, 'findById').rejects(mocks.addProductOrderOrder);
    sandBox.stub(Product, 'findById').rejects(mocks.addProductOrderProduct);
    return OrderController.addProduct(mocks.addProductRequest, callback)
      .should.be.fulfilled
      .then(() => {
        callback.args[0].should.to.be.a('array');
        callback.calledOn;
      });
  });

  it('Should get some order', async () => {
    const callback = sandBox.spy();
    sandBox.stub(Order, 'findById').resolves(mocks.getOrder);
    return OrderController.getOrder({request: { id: 1 }}, callback)
    .should.be.fulfilled
    .then(() => {
      callback.args[0][1].should.to.be.an('object');
      callback.args[0][1].id.should.to.be.a('number');
      callback.args[0][1].payed.should.to.be.a('boolean');
      callback.args[0][1].userId.should.to.be.a('number');
      callback.args[0][1].totally.should.to.be.a('number');
      callback.calledOn;
    });
  });

  it('Should get some order when is reject', async () => {
    const callback = sandBox.spy();
    sandBox.stub(Order, 'findById').resolves(mocks.getOrder);
    return OrderController.getOrder({ request: {  id: 1 } }, callback)
      .should.be.fulfilled
      .then(() => {
        callback.args[0].should.to.be.a('array');
        callback.calledOn;
      });
  });
});
