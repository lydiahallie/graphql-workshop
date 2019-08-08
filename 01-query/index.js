const { GraphQLServer } = require("graphql-yoga");
const { USERS, POSTS } = require("./data");

const typeDefs = `
  type Query {
    user(id: ID!): User!
    users: [User!]!
  }

  type User {
    id: ID!
    name: String!
    company: String!
    address: Address!
    website: String!
    email: String
  }
  
  type Address {
    street: String!
    postalCode: String!
    city: String!
    state: String!
  }
`;

const resolvers = {
  Query: {
    user: (root, args, context) => USERS.find(user => user.id === args.id),
    users: (root, args, context) => USERS
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log("Listening on http://localhost:4000!"));
