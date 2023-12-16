import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Update with your server's base URL

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const addUser = async(user) => {
  const response =  await apiClient.post(`${BASE_URL}/users/add`, user);
  return response.data;
};

export const getUsers = async() =>{
  const response = await axios.get('http://localhost:5000/api/users');
  return response.data;
}