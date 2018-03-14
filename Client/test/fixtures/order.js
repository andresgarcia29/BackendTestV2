module.exports = {
  createOrder: {
    payed: false,
    userId: 1,
  },
  createdOrderFalse: {
    payed: false,
    userId: 100,
  },
  addProductOne: {
    idOrder: 1,
    idProduct: 1,
    qty: 10,
  },
  addProductTwo: {
    idOrder: 1,
    idProduct: 2,
    qty: 10,
  },
  addProductThree: {
    idOrder: 1,
    idProduct: 3,
    qty: 10,
  },
  addProductFailed: {
    idOrder: 100,
    idProduct: 300,
    qty: 10,
  },
  checkOut: {
    id: 1
  },
  checkOutFailes: {
    id: 100
  },
  getOrderFail: {
    ido: 100000,
  },
  getOrder: {
    id: 1,
  },
}
