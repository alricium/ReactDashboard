import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Navbar.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ toggleSidebar, setIsAuthenticated }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        setIsAuthenticated(false);
        navigate("/login");
    };

    return (
        <nav className="nb-navbar navbar">
            <div className="nb-left-section">
                <div className="nb-hamburger" onClick={toggleSidebar}>
                    <GiHamburgerMenu />
                </div>
            </div>

            <div className="nb-right-section">
                <div className="nb-icon-box">
                    <IoIosNotificationsOutline className="nb-notifications-icon" />
                    <span className="nb-badge">3</span>
                </div>

                <div className="nb-profile-box" ref={dropdownRef}>
                    <img
                        src="https://i.pravatar.cc/50"
                        className="nb-profile-img"
                        alt="profile"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    />
                    {dropdownOpen && (
                        <div className="nb-profile-dropdown">
                            <Link to="/settings">Profile</Link>
                            <button
                                onClick={handleLogout}
                                style={{
                                    border: "none",
                                    background: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    padding: "10px 15px",
                                    cursor: "pointer",
                                    fontSize: "0.9rem",
                                    color: "inherit",
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
