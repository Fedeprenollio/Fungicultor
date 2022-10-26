import React from "react";
import { NavLink, Link, useNavigate, Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Martin Fungicultor</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/learn">
                Aprende a cultivar
              </Nav.Link>
              <Nav.Link as={NavLink} to="/galery">
                Galeria
              </Nav.Link>
              <Nav.Link as={NavLink} to="/recipes">
                Recetas
              </Nav.Link>
              <Nav.Link as={NavLink} to="/store">
                Store
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contactos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};
