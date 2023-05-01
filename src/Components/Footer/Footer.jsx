import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BiTimeFive } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  const footer = {
    social: [
      { img: <AiFillFacebook /> },
      { img: <AiFillTwitterSquare /> },
      { img: <AiFillYoutube /> },
    ],
    links: [
      { name: "Link1", to: "/#" },
      { name: "Link2", to: "/#" },
      { name: "Link3", to: "/#" },
      { name: "Link4", to: "/#" },
      { name: "Link5", to: "/#" },
    ],
    info: [
      {
        img: <HiLocationMarker />,
        content: "Egypt, Giza, Inside The Sphinx, Room Number 220",
      },
      { img: <BiTimeFive />, content: "Business Hours: From 10:00 To 18:00" },
      {
        img: <BsFillTelephoneFill />,
        content: [{ phone: "+20123456789" }, { phone: "+20198765432" }],
      },
    ],
  };
  return (
    <div className="footer">
      <div className="container">
        <div className="box">
          <h3>Title</h3>
          <ul className="social">
            {footer.social.map((contact) => {
              return <li>{contact.img}</li>;
            })}
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            beatae distinctio corporis doloribus aperiam architecto fugit
            perspiciatis quisquam nisi, alias magnam exercitationem. Eaque iste
            excepturi, tempora commodi modi facere aperiam.
          </p>
        </div>
        <div className="box">
          <ul className="links">
            {footer.links.map((link) => {
              return (
                <li>
                  <Link to={link.to}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="box">
          <ul className="info">
            {footer.info.map((i) => {
              return (
                <li>
                  {i.img}
                  <span>
                    {Array.isArray(i.content) ? (
                      <ul className="phone">
                        {i.content.map((phone) => {
                          return <li>{phone.phone}</li>;
                        })}
                      </ul>
                    ) : (
                      i.content
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="end">
        Design By <span onClick={() => window.location.replace('https://github.com/Micheal-Soliman')}>Micheal Soliman</span>
      </div>
    </div>
  );
}

export default Footer;
