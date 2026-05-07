import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user") || "null");


    //not logged in
    if (!user) {
        return <Navigate to="/signin"  />;
    }


    

    // not admin 
    if (user.role !== "admin") {
        return <Navigate to="/Addproduct" />;
    }
        //allowed
    return children;
};

export default AdminRoute;