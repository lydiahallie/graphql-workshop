# 02

[![Edit 2 - Basic Mutation](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/2-basic-mutation-iksjn?fontsize=14)

## Setup

1. `yarn` or `npm install`
2. `yarn start` or `npm start`
3. Go to `http://localhost:4000`

## Challenge

With queries, we can read data. However, we also want to be able to _write_ data, using mutations.

### Step 1:

To the `resolvers.Mutation` object in `resolvers.js`, add a `createUser` resolver function. This function should:

1. Create a new user object, which looks like:

```
{
  id: "fjd9s0jd....",
  name: "John Doe",
  company: "A Cool Company",
  address: {
    street: "Main Street 100",
    postalCode: "123456",
    city: "Miami",
    state: "FL"
  },
  website: "www.website.com",
  email: "email@email.com"
}
```

Add the `id` using `uniqid()`.

2. Add this user to the USERS array
3. Return the newly created user

### Step 2

To `schema.graphql`, add the `Mutation` type for `createUser`. To the `createUser` mutation, we pass an input type: `UserInput`. Te mutation returns a `User`.

### Step 3

To `schema.graphql`, add the input type `input UserInput`. This input contains a name (string), company (string), address (`AddressInput`), website (string), and email (string) field.

The address field is of type `Address`. This also needs to be an input type: `input AddressInput` which contains the same fields as `type Address`.
