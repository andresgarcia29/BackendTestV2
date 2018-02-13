const passportJwt = require('passport-jwt');

const JwtStrategy = passportJwt.Strategy;

const jwtOptions = require('./JWTOptions');
const models = require('../database/models/index');

const strategy = new JwtStrategy(jwtOptions, (jwtPayload, next) => {
  models.User.findById(jwtPayload.user).then((user) => {
    next(null, user);
  }).catch((err) => {
    return (err, false);
  });
});

module.exports = strategy;
