const { Order, Product } = require('../../database/models/');

class OrderController {
  async createOrder(call, callback) {
    try {
      const newOrder = await Order.create(call.request);
      callback(null, newOrder.dataValues.id);
    } catch (error) {
      callback(error);
    }
  }
  async getOrder(call, callback) {
    try {
      const getOne = await Order.findById(call.request.id);
      const payload = {
        id: getOne.dataValues.id,
        payed: getOne.dataValues.payed,
        userId: getOne.dataValues.user,
        totally: getOne.dataValues.totally || -1,
      };
      callback(null, payload);
    } catch (error) {
      callback(error);
    }
  }
  async addProduct(call, callback) {
    try {
      const getOneOrder = await Order.findById(call.request.idOrder);
      if (getOneOrder.dataValues.id === call.request.idOrder) {
        const getOneProduct = await Product.findById(call.request.idProduct);
        await getOneOrder.addItem(getOneProduct, { through: { qty: call.request.qty } });
        const payload = {
          id: getOneOrder.dataValues.id,
          payed: getOneOrder.dataValues.payed,
          userId: getOneOrder.dataValues.user,
          totally: getOneOrder.dataValues.totally || -1,
        };
        callback(null, payload);
      }
    } catch (error) {
      callback(error);
    }
  }
  async checkOut(call, callback) {
    try {
      let getOne = await Order.findById(call.request.id);
      getOne = await getOne.checkOut();
      callback(null, getOne.total);
    } catch (error) {
      callback(error);
    }
  }
}

module.exports = new OrderController();
