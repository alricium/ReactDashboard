import React from "react";
import { Box, Paper, Typography, Avatar, Button } from "@mui/material";
import "../../assets/css/Settings.css";

const ProfileCard = ({ user, onEdit }) => {
    return (
        <Paper className="profile-card" elevation={3}>
            <Box className="profile-header">
                <Avatar src={user.avatar} alt={user.name} className="profile-avatar" />
                <Typography variant="h6" className="profile-name">{user.name}</Typography>
                <Typography variant="body2" className="profile-email">{user.email}</Typography>
            </Box>

            <Box className="profile-details">
                <Typography variant="body1"><strong>Phone:</strong> {user.phone}</Typography>
                <Typography variant="body1"><strong>Role:</strong> {user.role}</Typography>
                <Typography variant="body1"><strong>Joined:</strong> {user.joined}</Typography>
            </Box>

            <Box className="profile-actions">
                <Button variant="contained" color="primary" onClick={onEdit}>
                    Edit Profile
                </Button>
                <Button variant="outlined" color="secondary">Change Password</Button>
            </Box>
        </Paper>
    );
};

export default ProfileCard;
