const { twoPerOne, morethreeProducts } = require('./Types');

module.exports = (object) => {
  if (object.code === 'pants') return twoPerOne(object);

  if (object.code === 'tshirt') return morethreeProducts(object);

  return object.qty * object.price;
};
