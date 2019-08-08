const { rule } = require("graphql-shield");
const { verifyUserToken } = require("../utils/user");

const rules = {
  isAuthenticated: rule()(async (_, args, ctx) => {
    const { id } = verifyUserToken(ctx);

    if (!id) {
      return new Error("You are not logged in.");
    }
    return true;
  }),

  isAdmin: rule()(async (_, args, ctx) => {
    const { id } = verifyUserToken(ctx);
    return await ctx.prisma.user({ id }).isAdmin();
  })
};

module.exports = { rules };
