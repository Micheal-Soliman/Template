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
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed atque aliquid velit, in quod veniam possimus, tenetur adipisci quidem unde laboriosam. Nihil reprehenderit, velit esse sint vel molestiae odit culpa.",
    },
    {
      img: art2,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed atque aliquid velit, in quod veniam possimus, tenetur adipisci quidem unde laboriosam. Nihil reprehenderit, velit esse sint vel molestiae odit culpa.",
    },
    {
      img: art3,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed atque aliquid velit, in quod veniam possimus, tenetur adipisci quidem unde laboriosam. Nihil reprehenderit, velit esse sint vel molestiae odit culpa.",
    },
    {
      img: art4,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed atque aliquid velit, in quod veniam possimus, tenetur adipisci quidem unde laboriosam. Nihil reprehenderit, velit esse sint vel molestiae odit culpa.",
    },
    {
      img: art5,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed atque aliquid velit, in quod veniam possimus, tenetur adipisci quidem unde laboriosam. Nihil reprehenderit, velit esse sint vel molestiae odit culpa.",
    },
    {
      img: art6,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed atque aliquid velit, in quod veniam possimus, tenetur adipisci quidem unde laboriosam. Nihil reprehenderit, velit esse sint vel molestiae odit culpa.",
    },
    {
      img: art7,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed atque aliquid velit, in quod veniam possimus, tenetur adipisci quidem unde laboriosam. Nihil reprehenderit, velit esse sint vel molestiae odit culpa.",
    },
    {
      img: art8,
      title: "Title",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed atque aliquid velit, in quod veniam possimus, tenetur adipisci quidem unde laboriosam. Nihil reprehenderit, velit esse sint vel molestiae odit culpa.",
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
                <h3>{article.title}</h3>
                <p title={article.desc}>{article.desc}</p>
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
