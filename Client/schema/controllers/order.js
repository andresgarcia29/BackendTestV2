const gateway = require('../../helpers/gateway');

module.exports = {
  createOrder(root, args, context) {
    const payload = {
      user: args.input.userId,
      payed: args.input.payed,
    };
    return gateway.sendUser('Order', 'createOrder', payload)
  },
  addProduct(root, args, context) {
    const payload = {
      qty: args.input.qty,
      idOrder: args.input.idOrder,
      idProduct: args.input.idProduct,
    }
    return gateway.sendUser('Order', 'addProduct', payload);
  },
  getOrder(root, args, context) {
    const payload = {
      id: args.input.id,
    };
    return gateway.sendUser('Order', 'getOrder', payload);
  },
  checkOut(root, args, context) {
    const payload = {
      id: args.input.id, 
    };
    return gateway.sendUser('Order', 'checkOut', payload);
  }
}