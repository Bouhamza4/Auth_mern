import React, { useState } from "react";
import axios from "axios";
import "../assets/styles/Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
   
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        // lastName: formData.lastName,
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setMessage("Registration successful!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>SIGN UP!</h2>

        {/* <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
        /> */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />

        <label className="terms">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
          />
          Accept <a href="#">Terms and Conditions</a>
        </label>

        <button type="submit">CONTINUE</button>

        {message && <p className="message">{message}</p>}

        <div className="socials">
          <span>Share Our Mission</span>
          <div className="icons">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
