const { User } = require('../../database/models');

class UserController {
  static async createUser(call, callback) {
    try {
      const newUser = await User.create(call.request);

      console.log(newUser);
      callback(null, newUser);
    } catch (error) {
      console.log('Error');
      callback(error);
    }
  }
}


module.exports = new UserController();
