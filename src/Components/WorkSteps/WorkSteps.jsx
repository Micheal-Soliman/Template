import React from "react";
import MainTitle from "../MainTitle/MainTitle";
import work1 from "../../assests/work-steps.png";
import work2 from "../../assests/work-steps-1.png";
import work3 from "../../assests/work-steps-2.png";
import work4 from "../../assests/work-steps-3.png";
import "./WorkSteps.css";

function WorkSteps() {
  const Works = [
    { img: work2, title: "Business Analysis" },
    { img: work3, title: "Architecture" },
    { img: work4, title: "Developement" },
  ];
  return (
    <div className="work-steps">
      <MainTitle title={"HOW IT WORKS ?"} />
      <div className="container">
        <img src={work1} alt="work" />
        <div className="steps">
          {Works.map((work) => {
            return (
              <div className="box">
                <img src={work.img} alt="work" />
                <div className="info">
                  <h3>{work.title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam ut aut magni optio earum provident sint non vero
                    ullam, rem soluta velit incidunt, atque facere quam nostrum
                    consequatur. Beatae, repellat?
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkSteps;
