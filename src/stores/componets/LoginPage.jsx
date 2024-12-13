

// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Usecart } from '../contex/Usecontex'; // Access context for login
// // import './Login.css'; // Import your custom CSS
// // import Nava from './nav';

// // function Loginpage() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const { login } = Usecart(); // Access the login function from context
// //   const navigate = useNavigate();

// //   const handleLogin = (e) => {
// //     e.preventDefault();
    
// //     const success = login(email, password); // Check login credentials

// //     if (success) {
// //         setEmail('')
// //         setPassword('')
// //       navigate('/home'); // Redirect to home page if login is successful
// //     } else {
// //       alert("Invalid credentials, please try again.");
// //     }
// //   };

// //   return (
// //        <>
    
// //     <div className="login-container">
       
      

      
// //       <div className="login-box">
// //       <h4>Welcome to ShopSphere</h4>
// //         <h2 className="login-title">Login</h2>
// //         <form className="login-form" onSubmit={handleLogin}>
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
// //           <button type="submit" className="login-button">Login</button>
// //         </form>
// //         <p className="register-link">
// //           Don't have an account? <a href="/register" className="register-link-text">Register here</a>
// //         </p>
// //       </div>
// //     </div>
// //     </>
   
// //   );
// // }

// // export default Loginpage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Usecart } from '../contex/Usecontex'; // Access context for login
// import './Login.css'; // Import your custom CSS
// import Nava from './nav';

// function Loginpage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = Usecart(); // Access the login function from context
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Fetch users from localStorage
//     const users = JSON.parse(localStorage.getItem('users')) || [];
    
//     // Check if user exists and credentials match
//     const user = users.find(user => user.email === email && user.password === password);

//     if (user) {
//       localStorage.setItem('currentUser', JSON.stringify(user)); // Set logged-in user
//       setEmail('');
//       setPassword('');
//       navigate('/home'); // Redirect to home page if login is successful
//     } else {
//       alert("Invalid credentials, please try again.");

//     }
//   };

//   return (
//     <>
//       <div className="login-container">
//         <div className="login-box">
//           <h4>Welcome to ShopSphere</h4>
//           <h2 className="login-title">Login</h2>
//           <form className="login-form" onSubmit={handleLogin}>
//             <div className="input-group">
//               <label htmlFor="email" className="input-label">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="input-field"
//               />
//             </div>
//             <div className="input-group">
//               <label htmlFor="password" className="input-label">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="input-field"
//               />
//             </div>
//             <button type="submit" className="login-button">Login</button>
//           </form>
//           <p className="register-link">
//             Don't have an account? <a href="/register" className="register-link-text">Register here</a>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Loginpage;


// LoginPage.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Usecart } from "../contex/Usecontex"; // Context to get login and register functions
// import "./Login.css"; // Your custom styles

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = Usecart();
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const success = login(email, password); // Login with email and password
//     if (success) {
//       navigate("/home"); // Redirect to the home page if login is successful
//     } else {
//       alert("Invalid credentials, please try again.");
//       navigate("/register"); // Redirect to register page if login fails
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
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
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Don't have an account?{" "}
//         <a href="/register" onClick={(e) => navigate("/register")}>
//           Register here
//         </a>
//       </p>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Usecart } from "../contex/Usecontex"; // Context to get login and register functions
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "./Login.css"
      

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
      alert("Invalid credentials, please try again.");
      // No need to navigate away if login fails; stay on the login page
    }
  };

  return (
    <div className="login-container">
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

