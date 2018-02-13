const passportJWT = require('passport-jwt');

const jwtOptions = {};
jwtOptions.jwtFromRequest = passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = '3d8djd8dd8xdDD#DKDO#Kd';

module.exports = jwtOptions;
