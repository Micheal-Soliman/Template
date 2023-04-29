import React from "react";
import "./Articles.css";
import MainTitle from "../MainTitle/MainTitle";
import art1 from "../../assests/cat-01.jpg";
import art2 from "../../assests/cat-02.jpg";
import art3 from "../../assests/cat-03.jpg";
import art4 from "../../assests/cat-04.jpg";
import art5 from "../../assests/cat-05.jpg";
import art6 from "../../assests/cat-06.jpg";
import art7 from "../../assests/cat-07.jpg";
import art8 from "../../assests/cat-08.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Articles() {
  const articles = [
    {
      img: art1,
    },
    {
      img: art2,
    },
    {
      img: art3,
    },
    {
      img: art4,
    },
    {
      img: art5,
    },
    {
      img: art6,
    },
    {
      img: art7,
    },
    {
      img: art8,
    },
  ];

  return (
    <div className="articles">
      <MainTitle title={"articles"} />
      <div className="container">
        {articles.map((article) => {
          return (
            <div className="box">
              <img src={article.img} alt="article" />
              <div className="content">
                <h3>Title</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                  in reiciendis natus, eveniet sapiente voluptate deserunt?
                  Voluptates consequuntur, esse atque nesciunt perferendis ex
                  fuga voluptatum, inventore consequatur quae sunt tenetur!
                </p>
              </div>
              <div className="info">
                <Link to="#">Read More</Link>
                <BsArrowRight />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Articles;
