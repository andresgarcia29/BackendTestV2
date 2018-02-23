module.exports = {
  twoPerOne: object => (Math.ceil(object.qty / 2) * object.price),
  morethreeProducts: object => (
    object.qty >= 3 ?
      object.qty * (object.price - 1) :
      object.qty * object.price
  ),
};
