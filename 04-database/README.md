# 04

## Prisma

So far we've only worked with hard-coded data. In many applications, you will want to connect your database to your GraphQL server to get data from your database.

One tool to do this, is called Prisma.

### Installation:

1. `brew install prisma` or `npm install -g prisma`
2. cd into your project, then run `prisma init prisma`
3. choose a demo server, and the JavaScript client

You can see that some files have been created:

- prisma.yml
- datamodel.prisma

In your `datamodel.prisma` you define what the data in your database looks like.

After you've changed the data, run `prisma generate`, then `prisma deploy`.

## Challenge

### Step 1

Add `prisma` to the context. You can do this by first importing:

`const { prisma } = require('./prisma/generated/prisma-client')`

After which you add it to the context:

```
const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  ctx: { prisma }
});
```

### Step 2

Change the resolvers accordingly. You can see the prisma syntax commented out in the `resolvers.js` file.

### Step 3

Start your server and go to http://localhost:4000. Create a user, using the `createUser` mutation. Then, go to your prisma endpoint, and query all users:

```
{
	users {
		id
		email
	}
}
```

Your newly created user should show up in your database.
