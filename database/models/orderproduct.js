'use strict';
module.exports = (sequelize, DataTypes) => {
  var OrderProduct = sequelize.define('OrderProduct', {
    orderOd: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return OrderProduct;
};