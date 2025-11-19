import React, { useState } from "react";
import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import "../../assets/css/Settings.css";

const ProfileForm = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <Paper className="profile-form" elevation={3}>
            <Typography variant="h6" className="form-title">Edit Profile</Typography>
            <Box component="form" onSubmit={handleSubmit} className="form-fields">
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <Box className="form-actions">
                    <Button type="submit" variant="contained" color="primary">Save</Button>
                    <Button type="button" variant="outlined" color="secondary" onClick={onCancel}>
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};

export default ProfileForm;
