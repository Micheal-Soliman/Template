import React from "react";
import "./TeamMembers.css";
import MainTitle from "../MainTitle/MainTitle";
import member1 from "../../assests/team-01.jpg";
import member2 from "../../assests/team-02.jpg";
import member3 from "../../assests/team-03.jpg";
import member4 from "../../assests/team-04.jpg";
import member5 from "../../assests/team-05.png";
import member6 from "../../assests/team-06.png";
import member7 from "../../assests/team-07.jpg";
import member8 from "../../assests/team-08.jpg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function TeamMembers() {
  const members = [
    { img: member1 },
    { img: member2 },
    { img: member3 },
    { img: member4 },
    { img: member5 },
    { img: member6 },
    { img: member7 },
    { img: member8 },
  ];
  return (
    <div className="team-members">
      <MainTitle title={"Team Members"} />
      <div className="container">
        {members.map((member) => {
          return (
            <div className="box">
              <div className="data">
                <img src={member.img} alt="member" />
                <div className="social">
                  <Link to="/#">
                    <FaFacebookF />
                  </Link>
                  <Link to="/#">
                    <BsTwitter />
                  </Link>
                  <Link to="/#">
                    <FaLinkedin />
                  </Link>
                  <Link to="/#">
                    <FaYoutube />
                  </Link>
                </div>
              </div>
              <div className="info">
                <h3>Micheal Soliman</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamMembers;
