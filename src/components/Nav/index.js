import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function darkNav() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,200;1,100&display=swap');
      </style>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/MainPage"> {"<> "} Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Docs"> Documents </Nav.Link>
            {/* nothing linked in */}
            <Nav.Link href="/Projects"> Projects</Nav.Link>
            <Nav.Link href="https://github.com/beachbrunet" target="_blank">
              {" "}
              Github{" "}
            </Nav.Link>

            <Nav.Link
              href="https://www.linkedin.com/in/catherine-cox-433061128/"
              target="_blank"
            >
              {" "}
              LinkedIn{" "}
            </Nav.Link>

            <Nav.Link href="/contact"> Contact {" </> "} </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default darkNav;
