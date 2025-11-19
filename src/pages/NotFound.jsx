import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>404</h1>
        <p>Page not found.</p>
        <Link to="/">Go back to Dashboard</Link>
      </div>
  );
}

export default NotFound;
