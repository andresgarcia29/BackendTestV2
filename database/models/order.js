module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    user: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    totally: DataTypes.DOUBLE,
    payed: DataTypes.BOOLEAN,
  }, {
  });
  Order.associate = (models) => {
    Order.belongsTo(models.User, { as: 'users', foreignKey: 'user' });
    Order.belongsToMany(models.Product, { through: 'OrderProduct' });
  };
  return Order;
};
