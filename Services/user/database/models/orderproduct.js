module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define('OrderProduct', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    qty: {
      type: DataTypes.INTEGER,
    },
  }, {
  });
  OrderProduct.associate = (models) => {
    models.Order.belongsToMany(models.Product, { through: 'OrderProduct', as: 'items' });
    models.Product.belongsToMany(models.Order, { through: 'OrderProduct' });
  };
  return OrderProduct;
};
