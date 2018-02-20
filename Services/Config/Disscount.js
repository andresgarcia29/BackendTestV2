module.exports = (object) => {
  let totally = 0;

  if (object.code === 'pants') {
    if (object.qty % 2 === 0) {
      totally += parseInt((object.qty / 2), 10) * object.price;
      return totally;
    }
    totally += (parseInt((object.qty / 2), 10) * object.price) + object.price;
    return totally;
  }

  if (object.code === 'tshirt') {
    if (object.qty >= 3) {
      totally += object.qty * 19;
      return totally;
    }
    totally += object.qty * object.price;
    return totally;
  }

  return object.qty * object.price;
};
