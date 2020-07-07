import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Moviedb_app</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/moviedb_app">Dashboard</Nav.Link>
          <Nav.Link href="/moviedb_app/Search">Search</Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};
export default Header;
