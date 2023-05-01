import React from "react";
import "./Skills.css";
import MainTitle from "../MainTitle/MainTitle";
import skill from "../../assests/skills.png";

function Skills() {
  const Skills = [
    { name: "html", skill: "100%" },
    { name: "css", skill: "90%" },
    { name: "javascript", skill: "80%" },
  ];
  return (
    <div className="our-skills">
      <MainTitle title={"Our Skills"} />
      <div className="container">
        <img src={skill} alt="" />
        <div className="skills">
          {Skills.map((skill) => {
            return (
              <div className="skill">
                <h3>
                  {skill.name} <span>{skill.skill}</span>
                </h3>
                <div className="progress">
                  <span style={{ width: `${skill.skill}` }}></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
