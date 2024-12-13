// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Usecart } from "../contex/Usecontex"; // Access context for registration
// // import "./register.css"; // Import the CSS

// // function Registerpage() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const { register } = Usecart(); // Access the register function from context
// //   const navigate = useNavigate();

// //   const handleRegister = (e) => {
// //     e.preventDefault();

// //     if (password !== confirmPassword) {
// //       alert("Passwords do not match!");
// //       return;
// //     }

// //     const success = register(email, password); // Attempt to register

// //     if (success) {
// //       alert("Registration successful!");
// //       navigate('/'); // Redirect to login after successful registration
// //     } else {
// //       alert("User already exists. Please login.");
// //       navigate('/'); // Redirect to login page if user exists
// //     }
// //   };

// //   return (
// //     <div className="register-page">
// //       <div className="register-box">
// //         <h2>Register</h2>
// //         <form className="register-form" onSubmit={handleRegister}>
// //           <div className="input-group">
// //             <label htmlFor="email" className="input-label">Email</label>
// //             <input
// //               type="email"
// //               id="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //               className="input-field"
// //             />
// //           </div>
// //           <div className="input-group">
// //             <label htmlFor="password" className="input-label">Password</label>
// //             <input
// //               type="password"
// //               id="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //               className="input-field"
// //             />
// //           </div>
// //           <div className="input-group">
// //             <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
// //             <input
// //               type="password"
// //               id="confirmPassword"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               required
// //               className="input-field"
// //             />
// //           </div>
// //           <button type="submit" className="register-button">Register</button>
// //         </form>
// //         <p className="login-link">
// //           Already have an account? <a href="/" className="login-link-text">Login here</a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Registerpage;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Usecart } from "../contex/Usecontex"; // Access context for registration
// import "./register.css"; // Import the CSS

// function Registerpage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const { register } = Usecart(); // Access the register function from context
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     // Check if the user already exists in localStorage
//     const existingUser = JSON.parse(localStorage.getItem('users')) || [];

//     // Save new user to localStorage
//     const newUser = { email, password };
//     localStorage.setItem('users', JSON.stringify([...existingUser, newUser]));

//     alert("Registration successful!");
//     navigate('/'); // Redirect to login after successful registration
//   };

//   return (
//     <div className="register-page">
//       <div className="register-box">
//         <h2>Register</h2>
//         <form className="register-form" onSubmit={handleRegister}>
//           <div className="input-group">
//             <label htmlFor="email" className="input-label">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="input-field"
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="password" className="input-label">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="input-field"
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="confirmPassword" className="input-label">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="input-field"
//             />
//           </div>
//           <button type="submit" className="register-button">Register</button>
//         </form>
//         <p className="login-link">
//           Already have an account? <a href="/" className="login-link-text">Login here</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Registerpage;


// RegisterPage.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Usecart } from "../contex/Usecontex"; // Context to handle registration
// import "./Register.css"; // Your custom styles

// const RegisterPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const { register } = Usecart();
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     const success = register(email, password); // Register new user

//     if (success) {
//       alert("Registration successful!");
//       navigate("/"); // Redirect to login page after successful registration
//     } else {
//       alert("User already exists. Please login.");
//       navigate("/"); // Redirect to login page if user exists
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Register</h2>
//       <form onSubmit={handleRegister}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//       <p>
//         Already have an account?{" "}
//         <a href="/" onClick={(e) => navigate("/")}>
//           Login here
//         </a>
//       </p>
//     </div>
//   );
// };

// export default RegisterPage;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Usecart } from "../contex/Usecontex"; // Context to handle registration
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "./Register.css"; // Your custom styles

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register } = Usecart();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Passwords must match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Attempt to register
    const success = register(email, password);

    if (success) {
      alert("Registration successful! Please log in.");
      navigate("/login"); // Redirect to login page after successful registration
    } else {
      alert("User already exists. Please login.");
      navigate("/login"); // Redirect to login page if user exists
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login">Login here</Link> {/* Use Link for internal navigation */}
      </p>
    </div>
  );
};

export default RegisterPage;



