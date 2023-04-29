import React from "react";
import MainTitle from "../MainTitle/MainTitle";
import { BsFillShieldFill, BsTools, BsFillPaletteFill } from "react-icons/bs";
import { FaMapMarkedAlt, FaBullhorn } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { Link } from "react-router-dom";
import './Services.css'

function Services() {
  const services = [
    { icon: <BsFillShieldFill />, name: "Security" },
    { icon: <BsTools />, name: "Fixing Issues" },
    { icon: <FaMapMarkedAlt />, name: "Location" },
    { icon: <GrPersonalComputer />, name: "Coding" },
    { icon: <BsFillPaletteFill />, name: "Design" },
    { icon: <FaBullhorn />, name: "Marketing" },
  ];
  return (
    <div className="services">
      <MainTitle title={"Services"} />
      <div className="container">
        {services.map((service) => {
          return (
            <div className="box">
              {service.icon}
              <h3>{service.name}</h3>
              <div className="info">
                <Link to='/#'>Details</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
