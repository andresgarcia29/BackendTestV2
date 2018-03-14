const controller = require('../controllers/order');

const resolvers = {
  Mutation: {
    createOrder: (root, args, context) => {
      return controller.createOrder(root, args, context);
    },
    addProduct: (root, args, context) => {
      return controller.addProduct(root, args, context);
    },
    checkOut: (root, args, context) => {
      return controller.checkOut(root, args, context);
    },
  },
  Query: {
    getOrder: (root, args, context) => {
      return controller.getOrder(root, args, context);
    },
  }
}

module.exports = resolvers;
