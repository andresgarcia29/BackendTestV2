module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Andres',
      lastName: 'Garcia',
      password: 'hola123xd',
      email: 'andres@gmail.com',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      firstName: 'Erick',
      lastName: 'Perez',
      password: 'hola123xd',
      email: 'erick@gmail.com',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    },
    {
      firstName: 'Ricardo',
      lastName: 'Gomez',
      password: 'hola123xd',
      email: 'ricardo@gmail.com',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
