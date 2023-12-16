// src/components/InputField.js
import React from 'react';
import TextField from '@mui/material/TextField';

const InputField = ({ label, type, name, value, onChange, required }) => {
  return (
    <TextField
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      variant="outlined"
      margin="normal"
      fullWidth
    />
  );
};

export default InputField;
