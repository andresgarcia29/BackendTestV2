const Disscount = require('../Config/Disscount');

module.exports = (products) => {
  let totally = 0;
  const getAllProducts = {};
  products.forEach((element) => {
    getAllProducts[element.code] = {
      qty: element.qty,
      code: element.code,
      price: element.price,
    };
  });
  const keys = Object.keys(getAllProducts);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    totally += Disscount(getAllProducts[key]);
  }
  return totally;
};
