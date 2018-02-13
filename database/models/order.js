module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    user: DataTypes.INTEGER,
    totally: DataTypes.DOUBLE,
    payed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Order;
};