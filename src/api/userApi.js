import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Update with your server's base URL

export const addUser = (user) => {
  return axios.post(`${BASE_URL}/users/add`, user);
};