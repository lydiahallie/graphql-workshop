var jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../../utils/auth");

const auth = {
  signupUser: async (root, { input }, ctx) => {
    const { name, email, password } = input;

    const user = await ctx.prisma.createUser({
      name,
      email,
      password: hashPassword(password)
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1y"
    });

    return { token, user };
  },

  loginUser: async (root, { email, password }, ctx) => {
    const user = await ctx.prisma.user({ email });

    const validPassword = await comparePassword(password, user.password);

    if (!validPassword) {
      throw new Error("The password is incorrect");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1y"
    });

    return { token, user };
  }
};

module.exports = auth;
