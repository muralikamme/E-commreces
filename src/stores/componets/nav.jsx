


import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { Usecart } from "../contex/Usecontex";
import { useSearch } from "./SearchContext";// Import SearchContext
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";

function Nava() {
  const { cartitem } = Usecart();
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
            <Link to="/home" className="navbar-brand">
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
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/Mobiles">
                  Mobiles
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Computers">
                  Computers
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/MenFashion">
                  Men Fashion
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/WomenFashion">
                  Women Fashion
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Watchs">
                  Watches
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Furniture">
                  Furniture
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Kitchen">
                  Kitchen
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Fridges">
                  Fridges
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Tv's">
                  TVs
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Speakers">
                  Speakers
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Books">
                  Books
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Ac's">
                  ACs
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Cart Section */}
            <Nav>
              <Nav.Link as={Link} to="/cart" className="cart-link">
                <div
                  className="cart-icon-container"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/126/126515.png"
                    alt="Cart"
                    style={{ width: "20px", marginRight: "8px" }}
                  />
                  {/* <span style={{ color: "white" }}>Cart ({cartitem.length})</span> */}
                </div>
              </Nav.Link>
              <Button variant="outline-light" as={Link} to="/">
                LogOut
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Nava;






