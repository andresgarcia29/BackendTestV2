const checkOutFunction = require('../../Helper/checkOut');

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
    // Order.belongsToMany(models.Product, { through: 'OrderProduct', foreignKey: 'ProductId', as: 'items' });
  };
  Order.prototype.checkOut = async function () {
    let products = await this.getItems();
    products = products.map(product => product.mapNeed());
    const totally = checkOutFunction(products);
    this.totally = totally;
    await this.save();
    return {
      items: products,
      total: totally,
    };
  };
  return Order;
};
