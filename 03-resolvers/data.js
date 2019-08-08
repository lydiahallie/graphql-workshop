const USERS = [
  {
    id: "5j2ii16cjjz2qky8s",
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
    id: "5j2ii16cjjz2ql8rr",
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
    id: "5j2ii16cjjz2qlmn8",
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
    id: "5j2ii16cjjz2qm4ex",
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
      id: "5j2ii16cjjz2qky8s",
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
      id: "5j2ii16cjjz2qky8s",
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
      id: "5j2ii16cjjz2ql8rr",
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
