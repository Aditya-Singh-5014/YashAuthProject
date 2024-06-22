import React, { useContext, useState } from "react";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastNme: "",
    age: "",
    email: "",
    contact: "",
  });
  const [error, setError] = useState("");
  const navigatefromRegister = () => {
    navigate("/home");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.contact ||
      !formData.age
    ) {
      setError("Please fill all the fields");
      return;
    }

    console.log("Registration Successfull", formData);
    const user = {
      name: `${formData.firstName} ${formData.lastName}`,
    };

    login(user);

    navigate("/home");
  };

  return (
    <div className="container">
      <div className="RegisterconatinerTwo">
        <HiOutlineArrowCircleLeft
          className="arrow"
          onClick={navigatefromRegister}
        />
        <div className="RegistercontainerThree">
          <p>First Name</p>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <p>Last Name</p>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <p>Age</p>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p>Contact</p>
          <input
            type="number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        <button onClick={handleRegister}>Register Now</button>
      </div>
    </div>
  );
}
