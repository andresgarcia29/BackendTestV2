const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');
const userDefs = require('./user');
const orderDefs = require('./order');

const SchemaDefinition = `
type Query {
  dummy: [String]
}

type Mutation {
  dummy: [String]
}

type Subscription {
  dummy: [String]
}

type Success {
  success: Boolean
}

schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}
`;

const typeDefs = [
  SchemaDefinition,
  ...userDefs,
  ...orderDefs,
];
const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
