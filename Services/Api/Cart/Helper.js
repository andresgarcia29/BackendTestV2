module.exports = {
  getTotally: (products) => {
    let totally = 0;

    let pants = 0;
    let tshirt = 0;
    let pricePants = 0;
    let priceTshirt = 0;

    products.forEach((product) => {
      if (product.product_order.code === 'tshirt') {
        tshirt += 1;
        priceTshirt = product.product_order.price;
      } else if (product.product_order.code === 'pants') {
        pants += 1;
        pricePants = product.product_order.price;
      } else {
        totally += product.product_order.price;
      }
    });

    if (pants % 2 === 0) {
      totally += parseInt((pants / 2)) * pricePants;
    } else {
      totally += (parseInt((pants / 2)) * pricePants) + pricePants;
    }

    if (tshirt >= 3) {
      totally += tshirt * 19;
    } else {
      totally += tshirt * priceTshirt;
    }
    return totally;
  },
};
