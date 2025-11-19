import React from "react";
import "../assets/css/Schedule.css";
import { Box, Paper, Typography } from "@mui/material";
import ScheduleTable from "../components/schedule/ScheduleTable";

const scheduleData = [
    { id: 1, task: "Team Meeting", date: "2025-11-20", time: "10:00 AM", status: "Pending" },
    { id: 2, task: "Project Review", date: "2025-11-21", time: "2:00 PM", status: "Completed" },
    { id: 3, task: "Code Deployment", date: "2025-11-22", time: "11:00 AM", status: "Pending" },
    { id: 4, task: "Client Call", date: "2025-11-23", time: "4:00 PM", status: "Cancelled" },
    { id: 5, task: "Design Review", date: "2025-11-24", time: "1:00 PM", status: "Pending" },
    { id: 6, task: "Sprint Planning", date: "2025-11-25", time: "9:30 AM", status: "Completed" },
    { id: 7, task: "Bug Fixing", date: "2025-11-26", time: "3:00 PM", status: "Pending" },
    { id: 8, task: "Client Feedback", date: "2025-11-27", time: "11:30 AM", status: "Pending" },
    { id: 9, task: "QA Testing", date: "2025-11-28", time: "2:30 PM", status: "Completed" },
    { id: 10, task: "Documentation Update", date: "2025-11-29", time: "10:15 AM", status: "Pending" },
    { id: 11, task: "Release Prep", date: "2025-11-30", time: "4:00 PM", status: "Pending" },
    { id: 12, task: "Team Retrospective", date: "2025-12-01", time: "3:00 PM", status: "Completed" },
    { id: 13, task: "Code Review", date: "2025-12-02", time: "11:00 AM", status: "Pending" },
    { id: 14, task: "Server Maintenance", date: "2025-12-03", time: "9:00 AM", status: "Cancelled" },
    { id: 15, task: "Marketing Sync", date: "2025-12-04", time: "2:00 PM", status: "Pending" },
    { id: 16, task: "Feature Demo", date: "2025-12-05", time: "1:00 PM", status: "Completed" }
];

const Schedule = () => {
    return (
        <Box className="schedule-container">
            <Paper className="schedule-paper" elevation={3}>
                <ScheduleTable rows={scheduleData} />
            </Paper>
        </Box>
    );
};

export default Schedule;
