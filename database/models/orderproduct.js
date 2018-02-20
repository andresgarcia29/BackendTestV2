module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define('OrderProduct', {
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  }, {
  });
  // OrderProduct.associate = (models) => {
  //   OrderProduct.belongsTo(models.Order, { as: 'order_product', foreignKey: 'orderId' });
  //   OrderProduct.belongsTo(models.Product, { as: 'product_order', foreignKey: 'productId' });
  // };
  return OrderProduct;
};
