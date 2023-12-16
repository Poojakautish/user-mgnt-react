const express = require('express');
const cors = require('cors');
const { getMockUsers, addMockUser } = require('./userData');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// API to get users
app.get('/api/users', (req, res) => {
  const users = getMockUsers();
  res.json(users);
});

// API to add a new user
app.post('/api/users/add', (req, res) => {
  const newUser = addMockUser(req.body);
  res.json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
