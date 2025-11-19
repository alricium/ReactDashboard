import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../assets/css/Sidebar.css";
import {
    AiFillHome,
    AiOutlineMessage,
    AiOutlineAppstore,
    AiOutlineCalendar,
    AiOutlineBarChart,
    AiOutlineRead,
    AiOutlineSetting,
} from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Sidebar({ isOpen, toggleSidebar }) {
    const location = useLocation();
    const [openDropdown, setOpenDropdown] = useState(null);

    React.useEffect(() => {
        if (location.pathname.includes("/analysis")) setOpenDropdown("analysis");
        else if (location.pathname.includes("/products")) setOpenDropdown("products");
        else setOpenDropdown(null);
    }, [location.pathname]);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <div className={`sb-container ${isOpen ? "active" : ""}`}>
            <div className="sb-close-icon" onClick={toggleSidebar}>
                <IoClose />
            </div>

            <h3 className="sb-title mb-4">Lorem ipsum.</h3>

            <ul className="sb-nav nav flex-column gap-2">
                <li className="sb-nav-item nav-item">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `sb-nav-link nav-link ${isActive ? "active" : ""}`}
                    >
                        <AiFillHome className="sb-icon" /> Dashboard
                    </NavLink>
                </li>

                <li className="sb-nav-item nav-item">
                    <NavLink
                        to="/users"
                        className={({ isActive }) => `sb-nav-link nav-link ${isActive ? "active" : ""}`}
                    >
                        <FaUsers className="sb-icon" /> Users
                    </NavLink>
                </li>

                <li className="sb-nav-item nav-item">
                    <NavLink
                        to="/schedule"
                        className={({ isActive }) => `sb-nav-link nav-link ${isActive ? "active" : ""}`}
                    >
                        <AiOutlineCalendar className="sb-icon" /> Schedule
                    </NavLink>
                </li>

                <li className="sb-nav-item nav-item">
                    <div
                        className={`sb-nav-link nav-link d-flex justify-content-between align-items-center ${openDropdown === "analysis" ? "active" : ""}`}
                        onClick={() => toggleDropdown("analysis")}
                    >
                        <span>
                            <AiOutlineBarChart className="sb-icon" /> Analysis
                        </span>
                        <span className="sb-dropdown-icon">
                            {openDropdown === "analysis" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </span>
                    </div>
                    <ul className={`sb-submenu ${openDropdown === "analysis" ? "active" : ""}`}>
                        <li className="nav-item">
                            <NavLink
                                to="/analysis/reports"
                                className={({ isActive }) => `sb-sub-link nav-link ${isActive ? "active" : ""}`}
                            >
                                Reports
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/analysis/statistics"
                                className={({ isActive }) => `sb-sub-link nav-link ${isActive ? "active" : ""}`}
                            >
                                Statistics
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li className="sb-nav-item nav-item">
                    <NavLink
                        to="/news"
                        className={({ isActive }) => `sb-nav-link nav-link ${isActive ? "active" : ""}`}
                    >
                        <AiOutlineRead className="sb-icon" /> News
                    </NavLink>
                </li>

                <li className="sb-nav-item nav-item">
                    <div
                        className={`sb-nav-link nav-link d-flex justify-content-between align-items-center ${openDropdown === "products" ? "active" : ""}`}
                        onClick={() => toggleDropdown("products")}
                    >
                        <span>
                            <AiOutlineAppstore className="sb-icon" /> Products
                        </span>
                        <span className="sb-dropdown-icon">
                            {openDropdown === "products" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </span>
                    </div>
                    <ul className={`sb-submenu ${openDropdown === "products" ? "active" : ""}`}>
                        <li className="nav-item">
                            <NavLink
                                to="/products/all"
                                className={({ isActive }) => `sb-sub-link nav-link ${isActive ? "active" : ""}`}
                            >
                                All Product List
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/products/enterprise"
                                className={({ isActive }) => `sb-sub-link nav-link ${isActive ? "active" : ""}`}
                            >
                                Featured Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/products/developer-tools"
                                className={({ isActive }) => `sb-sub-link nav-link ${isActive ? "active" : ""}`}
                            >
                                Product Details
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li className="sb-nav-item nav-item">
                    <NavLink
                        to="/settings"
                        className={({ isActive }) => `sb-nav-link nav-link ${isActive ? "active" : ""}`}
                    >
                        <AiOutlineSetting className="sb-icon" /> Settings
                    </NavLink>
                </li>
            </ul>

            <div className="sb-footer mt-auto text-center">
                <p>© 2025 Lorem ipsum dolor sit amet. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Sidebar;
