module.exports = {
  twoPerOne: (object) => {
    let totally = 0;
    if (object.qty % 2 === 0) {
      totally += parseInt((object.qty / 2), 10) * object.price;
      return totally;
    }
    totally += (parseInt((object.qty / 2), 10) * object.price) + object.price;
    return totally;
  },
  morethreeProducts: (object) => {
    let totally = 0;
    if (object.qty >= 3) {
      totally += object.qty * (object.price - 1);
      return totally;
    }
    totally += object.qty * object.price;
    return totally;
  },
};
