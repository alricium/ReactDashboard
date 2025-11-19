import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

function Login({ setIsAuthenticated }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const demoUser = {
        email: "test@gmail.com",
        password: "123456"
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === demoUser.email && password === demoUser.password) {
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("userEmail", email);

            setIsAuthenticated(true);

            toast.success("Login successful! Redirecting...");
            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);
        } else {
            toast.error("Incorrect email or password.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Login</h2>

                <div className="login-info-card">
                    <p>
                        <IoIosInformationCircleOutline className="login-card-icon"/>
                        Use "test@gmail.com" as email and "123456" as password for demo access.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="login-form-group login-input-icon">
                        <AiOutlineMail/>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="login-form-group login-password-icon">
                        <AiOutlineLock className="login-input-left-icon"/>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className="login-toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye />}
                        </span>
                    </div>

                    <div className="login-extra">
                        <label className="login-remember-me">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            Remember me
                        </label>
                        <Link to="/forgot-password" className="login-forgot-password">Forgot password?</Link>
                    </div>

                    <button type="submit" className="login-btn">Login</button>
                </form>

                <p className="login-footer">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
