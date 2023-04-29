import React from "react";
import "./Testimonials.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import avatar1 from "../../assests/avatar-01.png";
import avatar2 from "../../assests/avatar-02.png";
import avatar3 from "../../assests/avatar-03.png";
import avatar4 from "../../assests/avatar-04.png";
import avatar5 from "../../assests/avatar-05.png";
import avatar6 from "../../assests/avatar-06.png";
import MainTitle from "../MainTitle/MainTitle";

function Testimonials() {
  const testimonials = [
    { img: avatar1 },
    { img: avatar2 },
    { img: avatar3 },
    { img: avatar4 },
    { img: avatar5 },
    { img: avatar6 },
  ];
  return (
    <div className="testimonials">
        <MainTitle title={'testimonials'} />
      <div className="container">
        {testimonials.map((testimonial) => {
          return (
            <div className="box">
              <img src={testimonial.img} alt="avatar" />
              <h3>Micheal Soliman</h3>
              <span className="title">Front-End Developer</span>
              <div className="rate">
                <AiFillStar className="filled" />
                <AiFillStar className="filled" />
                <AiFillStar className="filled" />
                <AiFillStar className="filled" />
                <AiOutlineStar />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate dolores odit, pariatur vitae repudiandae fugiat, rem
                necessitatibus veniam ullam fugit, eveniet laboriosam alias
                doloremque modi illum ad est ipsum maiores?
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
