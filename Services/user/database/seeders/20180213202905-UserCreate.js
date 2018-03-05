module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      code: 'pants',
      name: 'Pants',
      price: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      code: 'tshirt',
      name: 'T-Shirt',
      price: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      code: 'hat',
      name: 'hat',
      price: 7.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  },
};
