import React, { useContext, useState } from "react";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigatefromLogin = () => {
    navigate("/home");
  };
  const handleLogin = () => {
    // Basic validation for demonstration
    if (username === "" || password === "") {
      setError("Please fill out both fields");
      return;
    }
    if (username === "Yash" && password === "Rai") {
      login({ name: username }); // Set user information in context
      navigate("/home"); // Navigate to home page after successful login
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <div className="container">
      <div className="LogincontainerTwo">
        <HiOutlineArrowCircleLeft
          className="arrow"
          onClick={navigatefromLogin}
        />
        <div className="LogincontainerThree">
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}{" "}
          {/* Display error message */}
        </div>
        <button onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
