import React from "react";
import { Paper, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const DashboardChart = ({ data }) => {
    return (
        <Paper elevation={3} className="dashboard-chart-card">
            <Typography className="dashboard-chart-title">
                Users & Sales Over Time
            </Typography>
            <div className="dashboard-chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="users" stroke="#4caf50" strokeWidth={2} />
                        <Line type="monotone" dataKey="sales" stroke="#2196f3" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Paper>
    );
};

export default DashboardChart;
