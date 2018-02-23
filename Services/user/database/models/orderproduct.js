module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define('OrderProduct', {
    OrderId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
  }, {
  });
  OrderProduct.associate = (models) => {
    models.Order.belongsToMany(models.Product, { through: 'OrderProduct', as: 'items', foreignKey: 'OrderId' });
    models.Product.belongsToMany(models.Order, { through: 'OrderProduct', as: 'orderProduct', foreignKey: 'ProductId' });
  };
  return OrderProduct;
};
