# 03

[![Edit Apollo Server](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/apollo-server-1uq1d?fontsize=14)

## Setup

1. `yarn` or `npm install`
2. `yarn start` or `npm start`
3. Go to `http://localhost:4000`

## Challenge

So far, the returned data of our resolvers matched the returned object fields. This means that we didn't need to create _custom resolvers_. However, sometimes we have types that have more fields than our data does. In this case, we need to tell GraphQL manually how to resolve those fields.

### Step 1:

To the `User` type, add a new field called `favoriteNumber`. The type of this number is `Int`, and is required.

### Step 2

To `resolvers.js`, add a `User` object just like the `Query` and `Mutation` one. In this object, we're going to write the resolver for the `favoriteNumber` field. Favorite number is a randomly created number between 0 and 100, using the following function:

`Math.floor(Math.random() * 100)`
