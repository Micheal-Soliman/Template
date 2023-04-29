import React from "react";
import MainTitle from "../MainTitle/MainTitle";
import feature1 from "../../assests/features-01.jpg";
import feature2 from "../../assests/features-02.jpg";
import feature3 from "../../assests/features-03.jpg";
import { Link } from "react-router-dom";
import './Features.css'

function Features() {
  const features = [
    { img: feature1, name: "quality" },
    { img: feature2, name: "time" },
    { img: feature3, name: "passion" },
  ];
  return (
    <div className="features">
      <MainTitle title={"features"} />
      <div className="container">
        {features.map((feature) => {
          return (
            <div className={`box ${feature.name}`}>
              <div className="image">
                <img src={feature.img} alt="" />
              </div>
              <h2>{feature.name}</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae modi aut, quidem corporis officia illo assumenda.
                Incidunt eos nam in nobis repellat recusandae ullam ut expedita
                vero suscipit! Ducimus, explicabo.
              </p>
              <Link to="/#">More</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
