const { shield, and, or } = require("graphql-shield");
const { rules } = require("./rules");

module.exports = shield({
  Query: {
    users: and(rules.isAuthenticated, rules.isAdmin)
  },
  User: {
    email: and(rules.isAuthenticated, rules.isAdmin)
  }
});
