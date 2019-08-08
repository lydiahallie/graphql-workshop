# 05

### Creating a token

Users should be able to sign and log into our app. We can do this by passing a Bearer token to the Authorization header.

When a user signs up, a new token is created. This token is based on the `id` of the newly created user:

```
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
}
```

When a user signs up, the returned data from the `signupUser` resolver is the `AuthPayload` type, which contains a `token` property with the value of the Bearer token, and the `user` property with the new user.

```
{
	"data": {
		"signupUser": {
			"token": "eyJhbGciOiJIU..."
		}
	}
}
```

We can pass this token to the Authorization header. In the GraphQL Playground, you can do this by adding it to the "HTTP Headers" tab.

```

{
"Authorization": "Bearer eyJhbGciOiJ..."
}

```

---

### Adding a `me` query

In order to know if a user is logged in, we need to create a `me` query. The `me` query returns the `id` of the currently logged in user. We can know this, since the Authorization header is available on every request: if a user is logged in, we can get the user's id from the bearer token.

The `me` query would look like:

```

me: (root, args, ctx) => {
  const { id } = verifyUserToken(ctx);
  return ctx.prisma.user({ id });
}

```

Where `verifyUserToken` is

```
const verifyUserToken = ctx => {
	const auth = ctx.request.headers.authorization;

	if (auth) {
  	const token = auth.replace("Bearer ", "");
		const verifiedToken = verify(token, process.env.JWT_SECRET);
		return verifiedToken;
	}
};

```

We can get access to the headers by passing the request object to the context:

```

context: req => ({
	...req,
	prisma
})

```

The returned verifiedToken would look like:

`{ id: 'cjz2mudiypz.....', iat: 1565265816, exp: 1596823416 }`, where the `id` is the currently logged in user's id.

In the `me` query, we destructure this `id` property, and request the user from the database with the corresponding id `ctx.prisma.user({ id })`. This returns a `User` type

---

### Logging in

When a user logs in, the user has to pass the `email`. We can find the corresponding user in our database using `ctx.prisma.user({ email })`. We can only do this if the email is unique, so in our datamodel:

`email: String! @unique`

This returns a `user` object with an `id` field. We use this `id` value for our Bearer token, which gets returned.
