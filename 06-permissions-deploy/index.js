const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./resolvers");
const { prisma } = require("./prisma/generated/prisma-client");
const permissions = require("./permissions");

const server = new GraphQLServer({
  typeDefs: __dirname + "/schema.graphql",
  resolvers,
  middlewares: [permissions],
  context: req => ({
    ...req,
    prisma
  })
});

server.start(() => console.log("Listening on http://localhost:4000!"));
