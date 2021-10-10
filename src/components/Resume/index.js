import React from "react";
import Resume from "../../assets/olderResume.pdf";

const resume = () => {
  return (
    <div class="mt-5">
      <h2 className="top-title">Resume</h2>
      <ul>
        <li>Full-Stack Web Developer</li>
      </ul>
      <h1>
        <img src={Resume} alt="resume" />
      </h1>
    </div>
  );
};
export default resume;
