const userTypes = require('./types/user');

const userDefs = `
  extend type Mutation {
    createUser(input: createUserInput!): User
  }
  extend type Query {
    getUser(input: getUserInput!): User
  }
`;

module.exports = [ userTypes, userDefs ];
