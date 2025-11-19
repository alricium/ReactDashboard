import React from "react";
import "../assets/css/Users.css";
import { Box } from "@mui/material";
import UserButtons from "../components/users/UserButtons";
import UserTable from "../components/users/UserTable";

const usersData = [
    { id: 1, name: "Test 1", email: "test1@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Test 2", email: "test2@example.com", role: "User", status: "Inactive" },
    { id: 3, name: "Test 3", email: "test3@example.com", role: "User", status: "Active" },
    { id: 4, name: "Test 4", email: "test4@example.com", role: "Moderator", status: "Active" },
    { id: 5, name: "Test 5", email: "test5@example.com", role: "User", status: "Active" },
    { id: 6, name: "Test 6", email: "test6@example.com", role: "User", status: "Inactive" },
    { id: 7, name: "Test 7", email: "test7@example.com", role: "User", status: "Active" },
    { id: 8, name: "Test 8", email: "test8@example.com", role: "User", status: "Inactive" },
    { id: 9, name: "Test 9", email: "test9@example.com", role: "User", status: "Active" },
    { id: 10, name: "Test 10", email: "test10@example.com", role: "User", status: "Inactive" },
    { id: 11, name: "Test 11", email: "test11@example.com", role: "Moderator", status: "Active" },
    { id: 12, name: "Test 12", email: "test12@example.com", role: "User", status: "Active" },
    { id: 13, name: "Test 13", email: "test13@example.com", role: "User", status: "Inactive" },
    { id: 14, name: "Test 14", email: "test14@example.com", role: "User", status: "Active" },
];

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1.5 },
    { field: "role", headerName: "Role", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
];

const Users = () => {
    const handleEditUsers = () => alert("User editing will open!");
    const handleExportExcel = () => alert("It will be downloaded as Excel!");

    return (
        <Box className="users-container">
            <UserButtons onEdit={handleEditUsers} onDownload={handleExportExcel} />
            <UserTable rows={usersData} columns={columns} />
        </Box>
    );
};

export default Users;
