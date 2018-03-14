const orderTypes = require('./types/order');

const orderDefs = `
  extend type Mutation {
    createOrder(input: createOrderInput!): OrderId
    addProduct(input: addProductInput!): Order
    checkOut(input: getOrderInput!): OrderTotally
  }
  extend type Query {
    getOrder(input: getOrderInput!): Order
  }
`;

module.exports = [orderTypes, orderDefs];