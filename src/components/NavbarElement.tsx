import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarElement() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Document">
              Document
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Signin">
              Sign in
            </Nav.Link>
            <Nav.Link as={Link} to="/Signup">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarElement;
