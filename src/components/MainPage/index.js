// about me
import React from "react";
import "./home.css";
// layouts
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// skillbar
import SkillBar from "react-skillbars";
// Images
import image from "../../assets/catherine.jpeg";
import imageCert from "../../assets/cert.png";

const mySkills = [
  { type: "HTML5", level: 92 },
  { type: "CSS3", level: 90 },
  { type: "Javascript", level: 75 },
  { type: "React", level: 60 },
  { type: "SQL", level: 60 },
  { type: "MySQL", level: 60 },
  { type: "Node.js", level: 55 },
  { type: "JQuery", level: 40 },
];
// edit colors for skills bar
const colors = {
  bar: "#364B63",
  title: {
    text: {
      hue: 0,
      saturation: 500,
      level: {
        minimum: 900,
        maximum: 900,
      },
    },
    background: {
      hue: 550,
      saturation: 40,
      level: 40,
    },
  },
};

function homePage() {
  return (
    <Container>
      <Row>
        {/* image */}
        <Col sm={4}>
          <img src={image} width="300" alt="profile pic" />
        </Col>
        {/* Contact info Col */}
        <Col sm={4}>
          <ul class="contact-info">
            <li> Name: Catherine Cox </li>
            <li> Profile: Full Stack Junior Developer </li>
            <li> Email: ccox.034@gmail.com </li>
            <li> Phone: (720) 584-7982</li>
          </ul>
        </Col>
      </Row>
      <Row>
        {/* skill bar should display here */}
        <Col sm>
          <SkillBar skills={mySkills} colors={colors} />
        </Col>
        {/* summary */}
        <Col lg>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;200&display=swap');
          </style>
          My thirst to learn and problem solve has always been a driving factor
          in all aspects of my life, that goes for the new experience as a
          Junior Software Developer. I enjoy collaborating with team members to
          gain new perspectives and provide ingenuity. Tired of Senior
          Developers set in their ways? Well look no further, because, what is
          better than a moldable mind to form to your team?
        </Col>
        <Col>
          <img src={imageCert} width="500" alt="cert" />
        </Col>
      </Row>
    </Container>
  );
}

export default homePage;
