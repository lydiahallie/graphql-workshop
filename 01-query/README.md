# 01

[![Edit 1 - Basic Query](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/1-basic-query-xl2xw?fontsize=14)

## Setup

1. `yarn` or `npm install`
2. `yarn start` or `npm start`
3. Go to `http://localhost:4000`

## Challenge

Currently, `data.js`. consists of an array of users, and an array of posts.
Our server isn't aware of the `POSTS` data yet: we haven't defined the `Post` type in the type definitions yet, and haven't made resolvers for it.

### Step 1:

Add a `Post` type to the schema, just like the `User` type. A post field's types are:

```json
{
  "id": "1",
  "title": "A Cool Post",
  "description": "A Cool Company",
  "author": {
    "id": "1",
    "name": "John Doe",
    "company": "A Cool Company",
    "address": {
      "street": "Main Street 100",
      "postalCode": "123456",
      "city": "Miami",
      "state": "FL"
    },
    "website": "www.website.com",
    "email": "email@email.com"
  },
  "body": "Lorem Ipsum"
}
```

It has an id as `ID`, a title as `String`, a description as `String`, an author as `User`, and body as `String`.

### Step 2:

Add the resolver functions. Users should be able to:

1. Query posts individually based on their id (Hint: Look at `Query.user`)
2. Query all posts (Hint: Look at `Query.users`)

### Step 3:

Add the new queries to `type Query`.
