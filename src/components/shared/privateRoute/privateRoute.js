import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Loader from "../loader/loader";

const PrivateRoute = ({ children }) => {
    let { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading && user) {
        return <Loader />
    }
    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;
