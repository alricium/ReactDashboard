import React from "react";
import "../assets/css/dashboard.css";
import StatList from "../components/dashboard/StatList";
import DashboardChart from "../components/dashboard/DashboardChart";
import { People, AttachMoney, AccountBalanceWallet } from "@mui/icons-material";

const statCards = [
    { title: "Users", value: "1,234", color: "#4caf50", icon: <People fontSize="large" /> },
    { title: "Sales", value: "$12,345", color: "#2196f3", icon: <AttachMoney fontSize="large" /> },
    { title: "Total Amount", value: "$98,765", color: "#ff9800", icon: <AccountBalanceWallet fontSize="large" /> }
];

const chartData = [
    { month: "Jan", users: 400, sales: 240 },
    { month: "Feb", users: 300, sales: 139 },
    { month: "Mar", users: 200, sales: 980 },
    { month: "Apr", users: 278, sales: 390 },
    { month: "May", users: 189, sales: 480 },
    { month: "Jun", users: 239, sales: 380 },
];

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <StatList data={statCards} />
            <DashboardChart data={chartData} />
        </div>
    );
};

export default Dashboard;
