module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    code: DataTypes.STRING,
  }, {
  });
  Product.prototype.mapNeed = async function () {
    return {
      code: this.code,
      price: this.price,
    };
  };
  return Product;
};
