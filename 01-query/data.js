const USERS = [
  {
    id: "1",
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
  },
  {
    id: "2",
    name: "Lydia Hallie",
    company: "Another Cool Company",
    address: {
      street: "Main Street 101",
      postalCode: "123456",
      city: "Miami",
      state: "FL"
    },
    website: "www.lydiawebsite.com"
  },
  {
    id: "3",
    name: "James Brown",
    company: "Facebook",
    address: {
      street: "Main Street 102",
      postalCode: "123456",
      city: "Miami",
      state: "FL"
    },
    website: "www.jameswebsite.com",
    email: "james@email.com"
  },
  {
    id: "4",
    name: "Sarah Black",
    company: "Google",
    address: {
      street: "Main Street 103",
      postalCode: "123456",
      city: "Miami",
      state: "FL"
    },
    website: "www.sarahwebsite.com",
    email: "sarah@email.com"
  }
];

const POSTS = [
  {
    id: "1",
    title: "A Cool Post",
    description: "A Cool Company",
    author: {
      id: "1",
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
    },
    body: "Lorem Ipsum"
  },
  {
    id: "2",
    title: "A Cool Post",
    description: "A Cool Company",
    author: {
      id: "1",
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
    },
    body: "Lorem Ipsum"
  },
  {
    id: "3",
    title: "A Cool Post",
    description: "A Cool Company",
    author: {
      id: "2",
      name: "Lydia Hallie",
      company: "Another Cool Company",
      address: {
        street: "Main Street 101",
        postalCode: "123456",
        city: "Miami",
        state: "FL"
      },
      website: "www.lydiawebsite.com"
    },
    body: "Lorem Ipsum"
  }
];

module.exports = { USERS, POSTS };
