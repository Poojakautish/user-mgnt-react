const { v4: uuidv4 } = require("uuid");

const mockUsers = [
  {
    id: uuidv4(),
    name: "John Doe",
    email: "john@example.com",
    age: 30,
    city: "New York",
  },
  {
    id: uuidv4(),
    name: "Jane Smith",
    email: "jane@example.com",
    age: 28,
    city: "San Francisco",
  },
  {
    id: uuidv4(),
    name: "Mike Johnson",
    email: "mike@example.com",
    age: 35,
    city: "Chicago",
  },
  {
    id: uuidv4(),
    name: "Mike Johnson",
    email: "mike@example.com",
    age: 35,
    city: "Chicago",
  },
  {
    id: uuidv4(),
    name: "Mike Johnson",
    email: "mike@example.com",
    age: 35,
    city: "Chicago",
  },
  {
    id: uuidv4(),
    name: "Mike Johnson",
    email: "mike@example.com",
    age: 35,
    city: "Chicago",
  },
  {
    id: uuidv4(),
    name: "Mike Johnson",
    email: "mike@example.com",
    age: 35,
    city: "Chicago",
  }
];

module.exports = {
  getMockUsers: () => mockUsers,
  addMockUser: (user) => {
    const newUser = { id: uuidv4(), ...user };
    mockUsers.push(newUser);
    return newUser;
  },
};
