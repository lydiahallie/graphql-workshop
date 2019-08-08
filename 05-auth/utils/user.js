const { verify } = require("jsonwebtoken");

const verifyUserToken = ctx => {
  const auth = ctx.request.headers.authorization;

  if (auth) {
    const token = auth.replace("Bearer ", "");
    const verifiedToken = verify(token, process.env.JWT_SECRET);
    return verifiedToken;
  }
};

module.exports = { verifyUserToken };
