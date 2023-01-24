import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function darkNav() {
  return (
    <>
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
