const uniqid = require("uniqid");
const { USERS, POSTS } = require("./data");

const resolvers = {
  Query: {
    user: (root, args) => USERS.find(user => user.id === args.id),
    users: (root, args) => USERS,
    post: (root, args) => POSTS.find(post => post.id === args.id),
    posts: (root, args) => POSTS
  },

  Mutation: {
    createUser: (root, { input }) => {
      const user = {
        id: uniqid(),
        ...input
      };

      USERS.push(user);
      return user;
    }
  }

  // User: {}
};

module.exports = resolvers;
