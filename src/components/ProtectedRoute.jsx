import React from "react";
import { Navigate, Outlet } from "react-router";
import useAuthStore from "../core/store/useAuthStore";

const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) return <Navigate to="/login" />;
  return <Outlet />;
};

export default ProtectedRoute;
