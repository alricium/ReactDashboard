import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Register.css";
import {
  AiOutlineGlobal,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agree) {
      alert("You must agree to the Terms and Privacy Policy.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (username && email && password) {
      navigate("/login");
    }
  };

  return (
      <div className="register-container">
        <div className="register-box">
          <div className="register-icon">
            <AiOutlineGlobal />
          </div>
          <h2 className="register-title">Register</h2>
          <p className="register-description">
            Create your account to access the dashboard.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="register-form-group register-input-icon">
              <AiOutlineUser />
              <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
              />
            </div>

            <div className="register-form-group register-input-icon">
              <AiOutlineMail />
              <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
            </div>

            <div className="register-form-group register-password-icon">
              <AiOutlineLock className="register-input-left-icon" />
              <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
              <span
                  className="register-toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
              >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            </div>

            <div className="register-form-group register-password-icon">
              <AiOutlineLock className="register-input-left-icon" />
              <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
              />
              <span
                  className="register-toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            </div>

            <div className="register-checkbox-group">
              <label className="register-checkbox-label">
                <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    required
                />
                I agree to the <Link to="/terms">Terms</Link> and{" "}
                <Link to="/privacy">Privacy Policy</Link>
              </label>
            </div>

            <button type="submit" className="register-btn">
              Register
            </button>
          </form>

          <p className="register-footer">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
  );
}

export default Register;
