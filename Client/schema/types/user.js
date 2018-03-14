const userDefs = `
  type User {
    id: Int!,
    firstName: String!,
    lastName: String!,
    password: String!,
    email: String!,
  }

  input createUserInput {
    firstName: String!,
    lastName: String!,
    password: String!,
    email: String!,
  }

  input getUserInput{
    id: Int!,
  }

  input updateUserInput {
    id: Int!,
    firstName: String!,
    lastName: String!,
    password: String!,
    email: String!,
  }
`;

module.exports = userDefs;

