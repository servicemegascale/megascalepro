// import React from "react";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem("isAdminAuthenticated");
//   return isAuthenticated ? children : <Navigate to="/admin/login" />;
// };

// export default ProtectedRoute;


// ==== src/admin/ProtectedRoute.jsx ====
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAdminAuthenticated");

  if (!isAuthenticated) {
    // 🔒 Redirect user to home page (or to login if you prefer)
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
