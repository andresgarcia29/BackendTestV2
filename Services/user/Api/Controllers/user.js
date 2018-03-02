const { User } = require('../../database/models');

class UserController {
  async createUser(call, callback) {
    try {
      const newUser = await User.create(call.request);
      const payload = {
        id: newUser.dataValues.id,
        email: newUser.dataValues.email,
        firstName: newUser.dataValues.firstName,
        lastName: newUser.dataValues.lastName,
      };
      callback(null, payload);
    } catch (error) {
      callback(error);
    }
  }
  async getUser(call, callback) {
    try {
      const getUser = await User.findById(call.request.id);
      const payload = {
        id: getUser.dataValues.id,
        email: getUser.dataValues.email,
        firstName: getUser.dataValues.firstName,
        lastName: getUser.dataValues.lastName,
      };
      callback(null, payload);
    } catch (error) {
      callback(error);
    }
  }
  async UpdateUser(call, callback) {
    try {
      await User.upsert(call.request);
      const getUserFunction = await User.findById(call.request.id);
      const payload = {
        id: getUserFunction.dataValues.id,
        email: getUserFunction.dataValues.email,
        firstName: getUserFunction.dataValues.firstName,
        lastName: getUserFunction.dataValues.lastName,
      };
      callback(null, payload);
    } catch (error) {
      callback(error);
    }
  }
}


module.exports = new UserController();
