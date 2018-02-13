const express = require('express');

const routes = express.Router();
const Auth = require('./Controller');

routes

  .post('/signup', Auth.signUp)
  .post('/signin', Auth.signIn);

module.exports = routes;
