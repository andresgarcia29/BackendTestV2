const controller = require('../controllers/user');

const resolvers = {
  Mutation: {
    createUser: (root, args, context) => {
      return controller.createUser(root, args, context);
    },
  },
  Query: {
    getUser: (root, args, context) => {
      return controller.getUser(root, args, context);
    },
  },
};

module.exports = resolvers;
