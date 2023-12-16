// TabsComponent.js
import React, { useState } from 'react';
import { Tabs, Tab, Paper } from '@mui/material';
import UsersTable from './userTable';
import AddUserForm from './addUserForm';

const UserManagement = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper elevation={3} style={{ marginBottom: '20px' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Users Table" />
          <Tab label="Add User Form" />
        </Tabs>
      </Paper>

      {value === 0 && <UsersTable />}
      {value === 1 && <AddUserForm />}
    </div>
  );
};

export default UserManagement;
