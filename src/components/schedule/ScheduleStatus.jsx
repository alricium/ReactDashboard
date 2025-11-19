import React from "react";
import "../../assets/css/Schedule.css";

const ScheduleStatus = ({ value }) => {
    const statusClass = `status-${value.toLowerCase()}`;
    return <span className={statusClass}>{value}</span>;
};

export default ScheduleStatus;
