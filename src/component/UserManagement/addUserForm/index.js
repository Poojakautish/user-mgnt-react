import React, { useState } from 'react';
import InputField from '../../common/InputField';
import * as userApi from '../../../api/userApi';

const AddUserForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: '',
    city: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = () => {
    // Perform validation
    if (!user.name || !user.email || !user.age || !user.city) {
      alert('All fields are required');
      return;
    }

    // Make the POST API call using the function from the api file
    userApi.addUser(user)
      .then(response => {
        console.log('User added successfully:', response.data);
        // Additional logic (e.g., reset form, update state)
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };

  return (
    <div>
      <h2>Add User Form</h2>
      <InputField label="Name" type="text" name="name" value={user.name} onChange={handleInputChange} required />
      <InputField label="Email" type="email" name="email" value={user.email} onChange={handleInputChange} required />
      <InputField label="Age" type="number" name="age" value={user.age} onChange={handleInputChange} required />
      <InputField label="City" type="text" name="city" value={user.city} onChange={handleInputChange} required />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default AddUserForm;
