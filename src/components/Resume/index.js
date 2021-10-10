import React from "react";
import Resume from "../../assets/olderResume.pdf";

const resume = () => {
  return (
    <div class="container">
      <h2 className="top-title">Resume</h2>
      <ul>
        <li>Full-Stack Web Developer and my Proficiencies</li>
        <h6>
          <ul>
            <li>Html5</li>
            <li>Css</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
            <li>Node.js</li>
            <li>MySQL, MongoDb, Mongoose</li>
            <li>Express</li>
            <li>React</li>
            <li>HandleBars</li>
          </ul>
        </h6>
      </ul>
      <h1>
        <img src={Resume} alt=" " />
      </h1>
    </div>
  );
};
export default resume;
