import React from "react";

const UserStatus = ({ value }) => (
    <span className={value === "Active" ? "status-active" : "status-inactive"}>
        {value}
    </span>
);

export default UserStatus;
