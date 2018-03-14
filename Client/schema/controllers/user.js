const gateway = require('../../helpers/gateway');

module.exports = {
  async createUser(root, args, context) {
    const payload = {
      email: args.input.email,
      firstName: args.input.firstName,
      lastName: args.input.lastName,
      password: args.input.password,
    };
    return gateway.sendUser('User', 'createUser', payload);
  },
  async getUser(root, args, context) {
    payload = {
      id: args.input.id,
    };
    return gateway.sendUser('User', 'getUser', payload);
  }
}