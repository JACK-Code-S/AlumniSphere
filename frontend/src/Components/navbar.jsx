import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav>
      <h3>Alumni Management System</h3>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
