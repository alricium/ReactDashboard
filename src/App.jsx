import React, { useState, useEffect } from "react";
import AppRoutes from "./routing/route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem("isAuthenticated") === "true";
        setIsAuthenticated(auth);
    }, []);

    return (
        <>
            <AppRoutes
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
            />
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default App;
