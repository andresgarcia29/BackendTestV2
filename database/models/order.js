module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    user: DataTypes.INTEGER,
    totally: DataTypes.DOUBLE,
    payed: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate: (models) => {
        Order.belongsTo(models.User, { as: 'users', foreignKey: 'user' });
        Order.hasMany(models.OrderProduct, { as: 'product_order', foreignKey: 'orderId' });
      },
    },
  });
  return Order;
};
