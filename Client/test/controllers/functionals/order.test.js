const API = require('../../api');
const fixturesUser = require('../../fixtures/user');
const fixturesOrder = require('../../fixtures/order');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

describe('#Order', async () => {
  beforeEach(() => {
    API.build = '';
  });
  it('Should create an order', async () => {
    await API.buildMutation('createOrder', fixturesOrder.createOrder, ['id']);
    await API.execute();
    expect(API.result).to.be.an('object');
    expect(API.result.data).to.have.property('createOrder');
    expect(API.result.data.createOrder).to.have.property('id');
  })
  it('Should cant create an order', async () => {
    await API.buildQuery('createOrder', fixturesOrder.createdOrderFalse, ['id']);
    await API.execute();
    expect(API.result.response.request.req.res.req.res.statusMessage).to.be.a('string');
    expect(API.result.response.request.req.res.req.res.statusMessage).equal('Bad Request');
    expect(API.result.response.request.req.res.req.res.statusCode).to.be.a('number');
    expect(API.result.response.request.req.res.req.res.statusCode).equal(400);
  })
  it('Should get an order', async () => {
    await API.buildQuery('getOrder', fixturesOrder.getOrder, ['id', 'userId', 'payed']);
    await API.execute();
    expect(API.result).to.be.an('object');
    expect(API.result.data).to.have.property('getOrder');
    expect(API.result.data.getOrder).to.have.property('id');
    expect(API.result.data.getOrder).to.have.property('userId');
  })
  it('Should cant get a order', async () => {
    await API.buildQuery('getOrder', fixturesOrder.getOrderFail, ['id', 'payed']);
    await API.execute();
    expect(API.result.response.request.req.res.req.res.statusMessage).to.be.a('string');
    expect(API.result.response.request.req.res.req.res.statusMessage).equal('Bad Request');
    expect(API.result.response.request.req.res.req.res.statusCode).to.be.a('number');
    expect(API.result.response.request.req.res.req.res.statusCode).equal(400);
  })
  it('Should add product', async () => {
    await API.buildMutation('addProduct', fixturesOrder.addProductOne, ['id', 'payed']);
    await API.execute();
    expect(API.result).to.be.an('object');
    expect(API.result.data).to.have.property('addProduct');
    expect(API.result.data.addProduct).to.have.property('id');
    expect(API.result.data.addProduct).to.have.property('payed');
  })
  it('Should cant add product', async () => {
    await API.buildMutation('addProdut', fixturesOrder.addProductFailed, ['id', 'payed']);
    await API.execute();
    expect(API.result.response.request.req.res.req.res.statusMessage).to.be.a('string');
    expect(API.result.response.request.req.res.req.res.statusMessage).equal('Bad Request');
    expect(API.result.response.request.req.res.req.res.statusCode).to.be.a('number');
    expect(API.result.response.request.req.res.req.res.statusCode).equal(400);
  })
  it('Should get the checkout correctly', async () => {
    await API.buildMutation('checkOut', fixturesOrder.checkOut, ['totally']);
    await API.execute();
    expect(API.result).to.be.an('object');
    expect(API.result.data).to.have.property('checkOut');
    expect(API.result.data.checkOut).to.have.property('totally');
  })
  it('Should cant get the checkout correctly', async () => {
    await API.buildMutation('checkOut', fixturesOrder.checkOut, ['id']);
    await API.execute();
    expect(API.result.response.request.req.res.req.res.statusMessage).to.be.a('string');
    expect(API.result.response.request.req.res.req.res.statusMessage).equal('Bad Request');
    expect(API.result.response.request.req.res.req.res.statusCode).to.be.a('number');
    expect(API.result.response.request.req.res.req.res.statusCode).equal(400);
  })
})
