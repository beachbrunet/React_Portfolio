// about me
import React from "react";
import "./home.css";
import image from "../../assets/catherine.jpeg";

const homePage = () => {
  return (
    <section className="intro">
      <div className="col-md-5 mx-auto">
        <h1 className=""> Catherine Cox </h1>
      </div>
      <p>
        <img src={image} width="100" alt="profile pic" />
        Pursuing a career as a full stack developer is a long journey filled
        with self improvement. University of Denver has provided a wonderful
        opportunity with knowledgeable instructors,supportive community and
        relative and challenging curriculum. This course along with college
        courses has prepared me to build upon my foundation to be a successful
        full stack developer! Pursuing a career as a full stack developer is a
        long journey filled with self improvement.
      </p>
    </section>
  );
};

export default homePage;
