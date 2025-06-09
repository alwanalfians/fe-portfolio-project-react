import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }

  return true;
};

export default ProtectedRoute;
