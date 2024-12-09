import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Usecart } from "../contex/Usecontex"; // Access context for registration
import "./register.css"; // Import the CSS

function Registerpage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register } = Usecart(); // Access the register function from context
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const success = register(email, password); // Attempt to register

    if (success) {
      alert("Registration successful!");
      navigate('/'); // Redirect to login after successful registration
    } else {
      alert("User already exists. Please login.");
      navigate('/'); // Redirect to login page if user exists
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/" className="login-link-text">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Registerpage;
