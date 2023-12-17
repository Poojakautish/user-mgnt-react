// TabsComponent.js
import React, { useState } from "react";
import { Tabs, Tab, Paper } from "@mui/material";
import UsersTable from "./userTable";
import AddUserForm from "./addUserForm";

const UserManagement = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div>
      <Paper elevation={3} style={{ marginBottom: "20px" }}>
        <Tabs value={currentTab} onChange={handleChange} centered>
          <Tab label="Users Table" value="1" />
          <Tab label="Add User Form" value="2" />
        </Tabs>
      </Paper>
      {currentTab === "1" && <UsersTable />}
      {currentTab === "2" && <AddUserForm />}
    </div>
  );
};

export default UserManagement;
