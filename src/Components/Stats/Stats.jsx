import React from "react";
import "./Stats.css";
import { AiOutlineUser } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { FaGlobeAfrica, FaMoneyBillAlt } from "react-icons/fa";

function Stats() {
  const stats = [
    { img: <AiOutlineUser />, stat: "150", title: "Clients" },
    { img: <BiCodeAlt />, stat: "135", title: "Projects" },
    { img: <FaGlobeAfrica />, stat: "50", title: "Countries" },
    { img: <FaMoneyBillAlt />, stat: "500", title: "Money" },
  ];
  return (
    <div className="stats">
      <h2>Our Awesome Stats</h2>
      <div className="container">
        {stats.map((stat) => {
          return (
            <div className="box">
              {stat.img}
              <span className="num">{stat.stat}</span>
              <span className="title">{stat.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stats;
