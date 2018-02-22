const Disscount = require('../Config/Disscount');

module.exports = (products) => {
  let totally = 0;
  const getAllProducts = {};
  products.forEach((element) => {
    if (getAllProducts[element.code] === undefined) {
      getAllProducts[element.code] = {};
      getAllProducts[element.code].qty = 1;
      getAllProducts[element.code].code = element.code;
      getAllProducts[element.code].price = element.price;
    } else {
      getAllProducts[element.code].qty += 1;
    }
  });
  const keys = Object.keys(getAllProducts);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    totally += Disscount(getAllProducts[key]);
  }
  return totally;
};
