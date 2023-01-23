// about me
import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SkillBar from "react-skillbars";

import image from "../../assets/catherine.jpeg";
// import backgroundImage from "../../assets/Abstract background.jpeg";

const mySkills = [
  { type: "HTML5", level: 92 },
  { type: "CSS3", level: 90 },
  { type: "Javascript", level: 75 },
  { type: "React", level: 55 },
  { type: "SQL", level: 60 },
  { type: "MySQL", level: 45 },
  { type: "Node.js", level: 65 },
  { type: "JQuery", level: 40 },
];
// edit colors for skills bar
const colors = {
  bar: "#364B63",
  title: {
    text: {
      hue: {
        minimum: 30,
        maximum: 30,
      },
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
          <img src={image} width="200" alt="profile pic" />
        </Col>
        {/* Contact info Col */}
        <Col sm={4}>
          <ul>
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
          {" "}
          <SkillBar skills={mySkills} colors={colors} />
        </Col>

        <Col lg>
          My thirst to learn and problem solve has always been a driving factor
          in all aspects of my life, that goes for the new experience as a
          Junior developer. I enjoy working with a team and developing skills
          that I can benift not only myself but others around me.
        </Col>
        <Col sm>Possibly certificate?</Col>
      </Row>
    </Container>
  );
}

export default homePage;

// Full-stack Web Developer that graduated from Denver University's Coding Boot Camp in mid October. The program specialized in Full-Stack Web Development covering a variety of topics as well as the rising popularity of React. Currently striving for a Bachelor's Degree to further my education in Software Development utilizing Denver University's working degree program during the evenings and plan to graduate in June of 2024. I have enjoyed both aspects of the front-end and back-end, but found the front end aspect of development enjoyable.
// My previous life experience under my belt before obtaining my certificate, I brought a refreshing understanding of company culture and customer responsibilities to the position; which required me to be organized, motivated and making me that much eager to apply my skills at a job in the software development industry.
// The certified course and the previous work experiences have polished my skills working with a team, as well as excel in individual projects where I need to be able to manage my time and resources to meet company requirements for project time and budget. Enjoying the aspects of on-the- job learning, problem-solving, and unique friendly approaches.
// As you're new potentially organized and motivated employee eager to apply time management and organizational skills in various environments. Seeking entry-level opportunities to expand skills while facilitating company growth.
