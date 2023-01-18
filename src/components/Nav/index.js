// import { Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// const Navbar = () => {
//   return (
//     <Nav fill variant="tabs" defaultActiveKey="/home">
//       <Nav.Item>
//         <Nav.Link href="/">Home</Nav.Link>
//       </Nav.Item>
//       {/* LinkedIn*/}
//       <Nav.Item>
//         <Nav.Link
//           href="https://www.linkedin.com/in/catherine-cox-433061128/"
//           target="_blank"
//         >
//           LinkedIn
//         </Nav.Link>
//       </Nav.Item>
//       {/* Github  */}
//       <Nav.Item>
//         <Nav.Link href="https://github.com/beachbrunet" target="_blank">
//           Github
//         </Nav.Link>
//       </Nav.Item>
//       {/* Contact */}
//       <Nav.Item>
//         <Nav.Link href="/contact">Contact</Nav.Link>
//       </Nav.Item>
//       {/* Resume */}
//       <Nav.Item>
//         <Nav.Link href="/resume">Resume</Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// };

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function darkNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Github">Github</Nav.Link>
            <Nav.Link href="#LinkedIn">LinkedIn</Nav.Link>
            <Nav.Link href="#Documents">Documents</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default darkNav;

// export default Navbar;
