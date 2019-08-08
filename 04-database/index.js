const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers
});

server.start(() => console.log("Listening on http://localhost:4000!"));
