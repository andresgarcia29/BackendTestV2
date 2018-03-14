const orderDef = `
  type Order {
    id: Int,
    payed: Boolean,
    totally: Float,
    userId: Int,
  }
  type OrderId { 
    id: Int
  }
  type OrderTotally {
    totally: Float
  }
  input createOrderInput {
    payed: Boolean,
    userId: Int,
  }
  input addProductInput {
    idOrder: Int,
    idProduct: Int,
    qty: Int,
  }
  input getOrderInput {
    id: Int
  }
`;

module.exports = orderDef;
