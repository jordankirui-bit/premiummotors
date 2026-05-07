import React from "react"
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({children,adminOnly=false}) => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    //not logged in
    if (!user) {
        return <Navigate to="/signin" replace />;
    }

    //not admin but trying to access admin only route
    if (adminOnly && user.role !== "admin") {
        return <Navigate to="/" replace />;
    }

    //allowed to access the route
    return children;
};

export default ProtectedRoute;
