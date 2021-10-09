import React from "react";
import { Nav } from "react-bootstrap";

const Navbar = () => {
  // homepage --about me
  <Nav fill variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    {/* LinkedIn*/}
    <Nav.Item>
      <Nav.Link eventKey="https://www.linkedin.com/in/catherine-cox-433061128/">
        LinkedIn
      </Nav.Link>
    </Nav.Item>
    {/* Github  */}
    <Nav.Item>
      <Nav.Link eventKey="https://github.com/beachbrunet">Github</Nav.Link>
    </Nav.Item>
    {/* Contact */}
    <Nav.Item>
      <Nav.Link eventKey="contact">Contact</Nav.Link>
    </Nav.Item>
    {/* Resume */}
    <Nav.Item>
      <Nav.Link eventKey="resume">Resume</Nav.Link>
    </Nav.Item>
  </Nav>;
};

export default Navbar;
