

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Usecart } from '../contex/Usecontex'; // Access context for login
import './Login.css'; // Import your custom CSS
import Nava from './nav';

function Loginpage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = Usecart(); // Access the login function from context
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const success = login(email, password); // Check login credentials

    if (success) {
        setEmail('')
        setPassword('')
      navigate('/home'); // Redirect to home page if login is successful
    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
       <>
    
    <div className="login-container">
       
      

      
      <div className="login-box">
      <h4>Welcome to ShopSphere</h4>
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
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
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="register-link">
          Don't have an account? <a href="/register" className="register-link-text">Register here</a>
        </p>
      </div>
    </div>
    </>
   
  );
}

export default Loginpage;

