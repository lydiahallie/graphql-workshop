const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./resolvers");
const { prisma } = require("./prisma/generated/prisma-client");

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    prisma
  })
});

server.start(() => console.log("Listening on http://localhost:4000!"));
