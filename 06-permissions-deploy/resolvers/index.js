const Query = require("./Query");
const auth = require("./Mutation/auth");

module.exports = {
  Query,
  Mutation: {
    ...auth
  }
};
