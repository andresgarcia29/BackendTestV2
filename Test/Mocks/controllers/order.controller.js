module.exports = {
  orderCreate: {
    dataValues: {
      id: 1,
    },
  },
  orderCreateCall: {
    request: {
      payed: false,
      user: 3,
    }
  },
  orderCreateRejected: {
    dataValues: {
      noid: 1,
    },
  },
  addProductOrderOrder: {
    dataValues: {
      id: 1,
      payed: true,
      user: 2,
      totally: 100,
    },
    addItem() {
      return true;
    },
  },
  addProductOrderProduct: {
    getOneOrder: {
      dataValues: {
        id: 1,
        name: 'hola',
        price: 11,
        code: '33',
      },
    },
  },
  addProductRequest: {
    request: {
      idOrder: 1,
      idProduct: 1,
      qty: 1,
    },
  },
  getOrder: {
    dataValues: {
      id: 1,
      payed: true,
      user: 2,
      totally: 100,
    },
  },
};