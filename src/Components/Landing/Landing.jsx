import React from "react";
import "./Landing.css";
import landing from "../../assests/landing-image.png";
import { Link } from "react-router-dom";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

function Landing() {
  return (
    <div className="landing">
      <div className="container">
        <div className="text">
          <h1>Welcome Here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum
            quisquam optio minus eligendi ad perferendis assumenda atque facilis
            natus illo a error quas id, omnis quaerat praesentium officiis modi?
          </p>
        </div>
        <div className="img">
          <img src={landing} alt="landing" />
        </div>
      </div>
      <Link to="/#articles">
        <BsFillArrowDownCircleFill />
      </Link>
    </div>
  );
}

export default Landing;
