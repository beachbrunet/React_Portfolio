import React from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      {/* LinkedIn*/}
      <Nav.Item>
        <Nav.Link
          href="https://www.linkedin.com/in/catherine-cox-433061128/"
          target="_blank"
        >
          LinkedIn
        </Nav.Link>
      </Nav.Item>
      {/* Github  */}
      <Nav.Item>
        <Nav.Link href="https://github.com/beachbrunet" target="_blank">
          Github
        </Nav.Link>
      </Nav.Item>
      {/* Contact */}
      <Nav.Item>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
      {/* Resume */}
      <Nav.Item>
        <Nav.Link href="/resume">Resume</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
