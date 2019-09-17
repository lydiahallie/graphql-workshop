const resolvers = {
  Query: {
    user: (root, args, ctx) => ctx.prisma.user({ id: args.id }),
    users: (root, args, ctx) => ctx.prisma.users()
  },

  Mutation: {
    createUser: (root, { input }, ctx) => {
      console.log(input);
      return ctx.prisma.createUser({
        data: { input }
      });
    }
  }
};

module.exports = resolvers;
