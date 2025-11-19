import React from "react";
import { Paper, Typography } from "@mui/material";

const StatCard = ({ icon, title, value, color }) => {
    return (
        <Paper elevation={3} className="dashboard-stat-card">
            {icon}
            <Typography className="dashboard-stat-title" style={{ color }}>
                {title}
            </Typography>
            <Typography className="dashboard-stat-value">
                {value}
            </Typography>
        </Paper>
    );
};

export default StatCard;
