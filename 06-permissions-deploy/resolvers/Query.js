const { verifyUserToken } = require("../utils/user");

const Query = {
  me: (root, args, ctx) => {
    const { id } = verifyUserToken(ctx);
    return ctx.prisma.user({ id });
  },
  user: (root, args, ctx) => ctx.prisma.user({ id: args.id }),
  users: (root, args, ctx) => ctx.prisma.users()
};

module.exports = Query;
