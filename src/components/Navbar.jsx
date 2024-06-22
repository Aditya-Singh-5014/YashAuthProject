import React, { useContext } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

  const navigatetoLogin = () => {
    navigate("/login");
  };

  const navigatetoRegister = () => {
    navigate("/register");
  };

  return (
    <div className="container">
      <div className="containerTwo">
        {!user ? (
          <>
            <button onClick={navigatetoLogin}>Login</button>
            <button onClick={navigatetoRegister}>Register Now</button>
          </>
        ) : (
          <>
            <span>Welcome to our page, {user.name}!</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
}
