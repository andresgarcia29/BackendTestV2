const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
      },
    },
  });
  User.associate = (models) => {
    User.hasMany(models.Order, { as: 'orders', foreignKey: 'user' });
  };
  return User;
};
