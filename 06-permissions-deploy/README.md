# 06

Not everyone should be allowed to query anything. To handle permissions, we can use `graphql-shield`. With `graphql-shield`, we can specify who is allowed and isn't allowed to make certain queries or mutations.

In the `permissions` folder, there are two files: `index.js` which specifies to which types and fields the rules apply, and `rules.js` which contain the rules. The functions in `rules.js` return either true or false.

We can add this shield in the middlewares array:

```
const server = new GraphQLServer({
  typeDefs: __dirname + "/schema.graphql",
  resolvers,
  middlewares: [permissions],
  context: req => ({
    ...req,
    prisma
  })
});
```

---

Now that we have a basic server, we can deploy it! In order to deploy it, you can use Zeit Now.

First, install the now cli using:

`npm i -g now`

The `now.json` file contains the configuration for our deployment.

```
{
  "version": 2,
  "name": "graphql-workshop",
  "env": {
    "IS_NOW": "true"
  },
  "builds": [{ "src": "/index.js", "use": "@now/node-server@canary" }],
  "routes": [{ "src": "/.*", "dest": "index.js" }],
  "build": {
    "env": {
      "JWT_SECRET": "@jwt_secret",
      "SHARED_KEY": "@shared_key",
      "PRISMA_ENDPOINT": "@prisma_endpoint",
    }
  }
}
```

In order to pass environemnt variables, we can use `now secrets`. In your terminal, write (without the [] brackets):

`now secrets add JWT_SECRET [value of your jwt secret env var]`
`now secrets add SHARED_KEY [value of your shared key env var]`
`now secrets add PRISMA_ENDPOINT [value of your endpoint]`

After this, simply type `now` in the terminal.
