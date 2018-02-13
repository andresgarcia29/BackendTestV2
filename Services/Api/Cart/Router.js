const express = require('express');

const routes = express.Router();
const Order = require('./Controller');
const authenticate = require('../../Helpers/Auth');


routes

  .get('/view/:_id', Order.viewOne)
  .get('/user', authenticate, Order.viewUser)
  .get('/checkout/:_id', authenticate, Order.checkOut)

  .post('/create', authenticate, Order.create)
  .post('/add/:_id', authenticate, Order.addProduct);

module.exports = routes;
