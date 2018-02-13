module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define('OrderProduct', {
    orderOd: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: (models) => {
        OrderProduct.belongsTo(models.Order, { as: 'order_product', foreignKey: 'orderId' });
        OrderProduct.belongsTo(models.Product, { as: 'product_order', foreignKey: 'productId' });
      },
    },
  });
  return OrderProduct;
};
