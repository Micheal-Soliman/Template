import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import megaMenu from "../../assests/megamenu.png";
import "./Navbar.css";
import { FcComments } from "react-icons/fc";
import {
  AiOutlineUser,
  AiFillCheckCircle,
  AiFillCalendar,
  AiFillPlayCircle,
  AiOutlinePercentage,
} from "react-icons/ai";
import {
  BsFillBuildingFill,
  BsFillClipboardCheckFill,
  BsServer,
} from "react-icons/bs";
import { FaChartBar } from "react-icons/fa";

function Navbar() {
  const [showMegaMenu, setShowMegaMenu] = useState(false)
  return (
    <div className="navbar">
      <div className="container">
        <Link to="#">LOGO</Link>
        <ul>
          <li>
            <NavLink to="#articles">Articles</NavLink>
          </li>
          <li>
            <NavLink to="#gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="#features">Features</NavLink>
          </li>
          <li>
            <button onClick={() => setShowMegaMenu(!showMegaMenu)}>Other Links</button>
            <div className={showMegaMenu ? "show-mega-menu" : "mega-menu"}>
              <div className="image">
                <img src={megaMenu} alt="menu" />
              </div>
              <ul className="links">
                <li>
                  <Link to="#">
                    Testimonials
                    <FcComments />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    Team Members
                    <AiOutlineUser />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    Services
                    <BsFillBuildingFill />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    Our Skills
                    <AiFillCheckCircle />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    How It Works
                    <BsFillClipboardCheckFill />
                  </Link>
                </li>
              </ul>
              <ul className="links">
                <li>
                  <Link to="#">
                    Events
                    <AiFillCalendar />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    Pricing Plans
                    <BsServer />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    Top Videos
                    <AiFillPlayCircle />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    Stats
                    <FaChartBar />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    Request A Discount
                    <AiOutlinePercentage />
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
