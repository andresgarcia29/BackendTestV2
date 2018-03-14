const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
const _ = require('lodash');
let resolvers = {};

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach((file) => {
    const resolver = require(path.join(__dirname, file));

    resolvers = _.merge(resolvers, resolver);
  });
module.exports = resolvers;
