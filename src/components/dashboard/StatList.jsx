import React from "react";
import StatCard from "./StatCard";

const StatList = ({ data }) => {
    return (
        <div className="dashboard-stats-wrapper">
            {data.map((item) => (
                <StatCard
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    value={item.value}
                    color={item.color}
                />
            ))}
        </div>
    );
};

export default StatList;
