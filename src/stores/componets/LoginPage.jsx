

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Usecart } from "../contex/Usecontex"; // Context to get login and register functions
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "./LoginPage.css"
      

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = Usecart(); // Access login function from context
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const success = login(email, password); // Login with email and password
    if (success) {
      navigate("/"); // Redirect to the home page if login is successful
    } else {
      alert("Invalid credentials or User not found , please try again.");
      // No need to navigate away if login fails; stay on the login page
    }
  };

  return (
    <div className="login-container" >
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link to="/register">Register here</Link> {/* Use Link to navigate to register */}
      </p>
    </div>
  );
};

export default LoginPage;

