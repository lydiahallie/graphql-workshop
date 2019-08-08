const resolvers = {
  Query: {
    // user:  one user: ctx.prisma.user({ id: args.id })
    // users: all users: ctx.prisma.users()
    // post:  one post: ctx.prisma.post({ id: args.id })
    // posts: all posts: ctx.prisma.posts()
  },

  Mutation: {
    // createUser: create a user : ctx.prisma.createUser(input)
  }
};

module.exports = resolvers;
