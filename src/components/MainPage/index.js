// about me
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./home.css";
import image from "../../assets/catherine.jpeg";
// import backgroundImage from "../../assets/Abstract background.jpeg";

function homePage() {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          Image goes here
          <img src={image} width="100" alt="profile pic" />
        </Col>

        <Col sm={4}>Contavt</Col>
      </Row>
      <Row>
        <Col sm> Skills here</Col>
        <Col sm> About me Summary</Col>
        <Col sm>Possibly certificate?</Col>
      </Row>
    </Container>
  );
}

export default homePage;
