import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = ({ children, setIsAuthenticated }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="main-layout" style={{ display: "flex" }}>
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Navbar toggleSidebar={toggleSidebar} setIsAuthenticated={setIsAuthenticated} />
                <main style={{ padding: "20px" }}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;
