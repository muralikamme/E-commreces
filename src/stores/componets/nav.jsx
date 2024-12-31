


// import React from "react";
// import { Link } from "react-router-dom";
// import { IoHome } from "react-icons/io5";
// import { Usecart } from "../contex/Usecontex";
// import { useSearch } from "./SearchContext";// Import SearchContext
// import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";

// function Nava() {
//   const { cartitem } = Usecart();
//   const { searchQuery, setSearchQuery } = useSearch(); // Access global search state
//   const [menuOpen, setMenuOpen] = React.useState(false); // For submenu toggle

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       {/* Main Navbar */}
//       <Navbar bg="secondary" expand="lg" variant="dark" >
//         <Container>
//           <Navbar.Brand>
//             <Link to="/" className="navbar-brand">
//               <IoHome style={{ color: "white", marginRight: "8px" }} />
//               ShopSphere
//             </Link>
//           </Navbar.Brand>

//           {/* Toggle Button for Mobile */}
//           <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
//           <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? "show" : ""}>
//             <Nav className="me-auto">
//               {/* Search Bar */}
//               <div className="search-bar">
//                 <input
//                   type="text"
//                   placeholder="Search products..."
//                   value={searchQuery} // Bind to global searchQuery
//                   onChange={(e) => setSearchQuery(e.target.value)} // Update global searchQuery
//                   className="form-control search-input"
//                   style={{
//                     maxWidth: "300px",
//                     marginRight: "15px",
//                     display: "inline-block",
//                   }}
//                 />
//               </div>

//               {/* Submenu Links */}
//               <NavDropdown title="Categories" id="basic-nav-dropdown">
//                 <NavDropdown.Item as={Link} to="/Mobiles">
//                   Mobiles
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Computers">
//                   Computers
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/MenFashion">
//                   Men Fashion
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/WomenFashion">
//                   Women Fashion
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Watchs">
//                   Watches
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Furniture">
//                   Furniture
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Kitchen">
//                   Kitchen
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Fridges">
//                   Fridges
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Tv's">
//                   TVs
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Speakers">
//                   Speakers
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Books">
//                   Books
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Ac's">
//                   ACs
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>

//             {/* Cart Section */}
//             <Nav>
//               <Nav.Link as={Link} to="/cart" className="cart-link">
//                 <div
//                   className="cart-icon-container"
//                   style={{ display: "flex", alignItems: "center" }}
//                 >
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/512/126/126515.png"
//                     alt="Cart"
//                     style={{ width: "20px", marginRight: "8px" }}
//                   />
//                   {/* <span style={{ color: "white" }}>Cart ({cartitem.length})</span> */}
//                 </div>
//               </Nav.Link>
//               <Button variant="outline-light" as={Link} to="/login">
//                 LogOut
//               </Button>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Nava;


// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { IoHome } from "react-icons/io5";
// import { Usecart } from "../contex/Usecontex";
// import { useSearch } from "./SearchContext"; // Import SearchContext
// import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";

// function Nava() {
//   const { cartitem, currentUser, logout } = Usecart(); // Access cart and current user state
//   const { searchQuery, setSearchQuery } = useSearch(); // Access global search state
//   const [menuOpen, setMenuOpen] = React.useState(false); // For submenu toggle
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleLogout = () => {
//     logout(); // Clear current user from context
//     navigate("/login"); // Redirect to login page
//   };

//   return (
//     <>
//       {/* Main Navbar */}
//       <Navbar bg="secondary" expand="lg" variant="dark">
//         <Container>
//           <Navbar.Brand>
//             <Link to="/" className="navbar-brand">
//               <IoHome style={{ color: "white", marginRight: "8px" }} />
//               ShopSphere
//             </Link>
//           </Navbar.Brand>

//           {/* Toggle Button for Mobile */}
//           <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
//           <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? "show" : ""}>
//             <Nav className="me-auto">
//               {/* Search Bar */}
//               <div className="search-bar">
//                 <input
//                   type="text"
//                   placeholder="Search products..."
//                   value={searchQuery} // Bind to global searchQuery
//                   onChange={(e) => setSearchQuery(e.target.value)} // Update global searchQuery
//                   className="form-control search-input"
//                   style={{
//                     maxWidth: "300px",
//                     marginRight: "15px",
//                     display: "inline-block",
//                   }}
//                 />
//               </div>

//               {/* Submenu Links */}
//               <NavDropdown title="Categories" id="basic-nav-dropdown">
//                 <NavDropdown.Item as={Link} to="/Mobiles">
//                   Mobiles
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Computers">
//                   Computers
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/MenFashion">
//                   Men Fashion
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/WomenFashion">
//                   Women Fashion
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Watchs">
//                   Watches
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Furniture">
//                   Furniture
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Kitchen">
//                   Kitchen
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Fridges">
//                   Fridges
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Tv's">
//                   TVs
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Speakers">
//                   Speakers
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Books">
//                   Books
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/Ac's">
//                   ACs
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>

//             {/* Cart Section */}
//             <Nav>
//               <Nav.Link as={Link} to="/cart" className="cart-link">
//                 <div
//                   className="cart-icon-container"
//                   style={{ display: "flex", alignItems: "center" }}
//                 >
//                   <img
//                     src="https://cdn-icons-png.flaticon.com/512/126/126515.png"
//                     alt="Cart"
//                     style={{ width: "20px", marginRight: "8px" }}
//                   />
//                   <span style={{ color: "white" }}>Cart ({cartitem.length})</span>
//                 </div>
//               </Nav.Link>

//               {/* Conditional Rendering for Login/Logout */}
//               {currentUser ? (
//                 <Button variant="outline-light" onClick={handleLogout}>
//                   Logout
//                 </Button>
//               ) : (
//                 <Button variant="outline-light" as={Link} to="/login">
//                   Login
//                 </Button>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Nava;





import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { Usecart } from "../contex/Usecontex";
import { useSearch } from "./SearchContext";// Import SearchContext
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";

function Nava() {
  const { cartitem, currentUser, logout } = Usecart();  // Get currentUser and logout function
  const { searchQuery, setSearchQuery } = useSearch(); // Access global search state
  const [menuOpen, setMenuOpen] = React.useState(false); // For submenu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <Navbar bg="secondary" expand="lg" variant="dark" >
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand" style={{textDecoration:"none"}}>
              <IoHome style={{ color: "white", marginRight: "8px" }} />
              ShopSphere
            </Link>
          </Navbar.Brand>

          {/* Toggle Button for Mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
          <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? "show" : ""}>
            <Nav className="me-auto">
              {/* Search Bar */}
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery} // Bind to global searchQuery
                  onChange={(e) => setSearchQuery(e.target.value)} // Update global searchQuery
                  className="form-control search-input"
                  style={{
                    maxWidth: "300px",
                    marginRight: "15px",
                    display: "inline-block",
                  }}
                />
              </div>

              {/* Submenu Links */}
              <NavDropdown title="Categories" id="basic-nav-dropdown" >
              <NavDropdown.Item as={Link} to="/MenFashion" style={{textDecoration:"none"}}>
                  Men Fashion
                </NavDropdown.Item>
               
                <NavDropdown.Item as={Link} to="/Computers" style={{textDecoration:"none"}}>
                  Computers
                </NavDropdown.Item>
                
                <NavDropdown.Item as={Link} to="/WomenFashion" style={{textDecoration:"none"}}>
                  Women Fashion
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Watchs" style={{textDecoration:"none"}}>
                  Watches
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Furniture" style={{textDecoration:"none"}}>
                  Furniture
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Mobiles" style={{textDecoration:"none"}}>
                  Mobiles
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Kitchen" style={{textDecoration:"none"}}>
                  Kitchen
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Fridges" style={{textDecoration:"none"}}>
                  Fridges
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Tv's" style={{textDecoration:"none"}}>
                  TVs
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Speakers" style={{textDecoration:"none"}}>
                  Speakers
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Books" style={{textDecoration:"none"}}>
                  Books
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Ac's" style={{textDecoration:"none"}}>
                  ACs
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

          

            {/* Cart Section */}
            <Nav>
              <Nav.Link as={Link} to="/cart" className="cart-link" style={{textDecoration:"none"}}>
                <div
                  className="cart-icon-container"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/126/126515.png"
                    alt="Cart"
                    style={{ width: "20px", marginRight: "8px" }}
                  />
                  <span style={{ color: "white" }}>Cart </span>
                </div>
              </Nav.Link>

              {/* Conditional rendering for login/logout */}
              {currentUser ? (
                <Button variant="outline-light" onClick={() => logout()}  style={{textDecoration:"none"}}>Logout</Button>
              ) : (
                <Button variant="outline-light" as={Link} to="/login"  style={{textDecoration:"none"}}>Login</Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Nava;








