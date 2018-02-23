const { Order, Product } = require('../../database/models/');

class OrderController {
  async createOrder(call, callback) {
    try {
      const newOrder = await Order.create({});
      callback(null, newOrder);
    } catch (error) {
      callback(error);
    }
  }
  async getOrder(call, callback) {
    try {
      const getOne = await Order.findById(call.request.id);
      callback(null, getOne);
    } catch (error) {
      callback(error);
    }
  }
  async addProduct(call, callback) {
    try {
      const getOne = await Order.findById(call.request.id);
      let getOneProduct = await Product.findById(call.request.product);
      getOneProduct = await getOne.addItems(getOneProduct.id);
      callback(null, getOneProduct);
    } catch (error) {
      callback(error);
    }
  }
  async checkOut(call, callback) {
    try {
      const getOne = await Order.findById(call.request.id);
      await getOne.checkOut();
      callback(null, getOne);
    } catch (error) {
      callback(error);
    }
  }
}

module.exports = new OrderController();
