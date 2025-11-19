import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users.jsx";
import Schedule from "../pages/Schedule";
import Reports from "../pages/analysis/Reports";
import Statistics from "../pages/analysis/Statistics";
import News from "../pages/News";
import ProductList from "../pages/products/AllProductList";
import EnterpriseSolutions from "../pages/products/FeaturedProducts";
import DeveloperTools from "../pages/products/ProductDetails";
import Settings from "../pages/Settings";
import Login from "../auth/Login";
import Register from "../auth/Register";
import NotFound from "../pages/NotFound";

const authRoutes = [
    { path: "/login", element: <Login />, layout: AuthLayout },
    { path: "/register", element: <Register />, layout: AuthLayout },
];

const protectedRoutes = [
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/users", element: <Users /> },
    { path: "/schedule", element: <Schedule /> },
    { path: "/analysis/reports", element: <Reports /> },
    { path: "/analysis/statistics", element: <Statistics /> },
    { path: "/news", element: <News /> },
    { path: "/products/all", element: <ProductList /> },
    { path: "/products/enterprise", element: <EnterpriseSolutions /> },
    { path: "/products/developer-tools", element: <DeveloperTools /> },
    { path: "/settings", element: <Settings /> },
];

function AppRoutes({ isAuthenticated, setIsAuthenticated }) {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/dashboard" replace />
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />

                {authRoutes.map(({ path, element, layout: Layout }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            !isAuthenticated ? (
                                <Layout>{React.cloneElement(element, { setIsAuthenticated })}</Layout>
                            ) : (
                                <Navigate to="/dashboard" replace />
                            )
                        }
                    />
                ))}

                {protectedRoutes.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            isAuthenticated ? (
                                <MainLayout setIsAuthenticated={setIsAuthenticated}>
                                    {element}
                                </MainLayout>
                            ) : (
                                <Navigate to="/login" replace />
                            )
                        }
                    />
                ))}

                <Route path="*" element={<AuthLayout><NotFound /></AuthLayout>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
