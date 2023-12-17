import React, { useState } from "react";
import InputField from "../../common/InputField";
import * as userApi from "../../../api/userApi";
import ButtonField from "../../common/ButtonField";
import { Box, Typography, Container } from "@mui/material";

const AddUserForm = () => {
  const initialUserState = {
    name: "",
    email: "",
    age: "",
    city: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = () => {
    // Perform validation
    if (!user.name || !user.email || !user.age || !user.city) {
      alert("All fields are required");
      return;
    }
    // Make the POST API call using the function from the api file
    userApi
      .addUser(user)
      .then((response) => {
        window.alert("User added successfully", response.data);
        console.log("User added successfully:", response.data);
        // Reset the form state to its initial values
        setUser(initialUserState);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
        alert(error.message);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box>
        <Typography variant="h5" component="h2" gutterBottom>
          Add New User
        </Typography>
        <InputField
          label="Name"
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="Age"
          type="number"
          name="age"
          value={user.age}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="City"
          type="text"
          name="city"
          value={user.city}
          onChange={handleInputChange}
          required
        />
        <ButtonField label="Add User" onClick={handleAddUser} margin="20px 0" />
      </Box>
    </Container>
  );
};

export default AddUserForm;
