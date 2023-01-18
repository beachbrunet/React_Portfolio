import React from "react";
import SkillBar from "react-skillbars";

// Dont forget to adjust the type of skills
const doSomething = function () {
  [
    { type: "Java", level: 100 },
    { type: "React", level: 85 },
    { type: "Javascript", level: 75 },
    { type: "Spring", level: 50 },
    { type: "Docker", level: 25 },
    { type: "HTML", level: 20 },
    { type: "NoSQL", level: 0 },
  ];
};
export default doSomething;

// const colors = {
//   bar: {
//     hue: 0,
//     saturation: 50,
//     level: {
//       minimum: 80,
//       maximum: 100,
//     },
//   },
// };
// <SkillBar skills={skills} colors={colors} />;
