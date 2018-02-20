module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    code: DataTypes.STRING,
  }, {
  });
  Product.prototype.returnInstance = async function () {
    return {
      code: this.code,
      price: this.price,
    };
  };
  return Product;
};
