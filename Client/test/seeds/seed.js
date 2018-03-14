const API = require('../api');
const fixturesUser = require('../fixtures/user');
const fixturesOrder = require('../fixtures/order');

module.exports = {
  seedAll: async () => {
    await API.buildMutation('createUser', fixturesUser.oneUser, ['id']);
    await API.execute();

    await API.buildMutation('createUser', fixturesUser.threeUser, ['id']);
    await API.execute();

    await API.buildMutation('createOrder', fixturesOrder.createOrder, ['id']);
    await API.execute();

    await API.buildMutation('createOrder', fixturesOrder.createOrder, ['id']);
    await API.execute();
  },
};
