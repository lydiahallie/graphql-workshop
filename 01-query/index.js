const { GraphQLServer } = require("graphql-yoga");
const { USERS, POSTS } = require("./data");

const typeDefs = `
  type Query {
    user(id: ID!): User!
    users: [User!]!
    post(id: ID!): Post!
    posts: [Post!]!
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

  type Post {
    id: ID!
    title: String!
    description: String!
    author: User!
    body: String!
  }
`;

const resolvers = {
  Query: {
    user: (root, args, context) => USERS.find(user => user.id === args.id),
    users: (root, args, context) => USERS,
    post: (root, args, context) => POSTS.find(post => post.id === args.id),
    posts: (root, args, context) => POSTS
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log("Listening on http://localhost:4000!"));
