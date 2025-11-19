import React from "react";
import { Box, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';

const UserButtons = ({ onEdit, onDownload }) => (
    <Box className="users-buttons">
        <Button variant="contained" color="primary" startIcon={<EditIcon />} onClick={onEdit}>
            Edit User
        </Button>
        <Button variant="outlined" color="secondary" startIcon={<DownloadIcon />} onClick={onDownload}>
            Download as Excel
        </Button>
    </Box>
);

export default UserButtons;
