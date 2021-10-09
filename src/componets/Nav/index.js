import React from "react";
import { Nav } from "react-bootstrap";

const Nav = () => {
  <Nav fill variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link eventKey="link-1">Something</Nav.Link>
    </Nav.Item>

    <Nav.Item>
      {/* <Nav.Link eventKey="https://github.com/beachbrunet">Github</Nav.Link> */}
    </Nav.Item>
  </Nav>;
};

export default Nav;
