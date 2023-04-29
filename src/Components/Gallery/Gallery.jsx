import React from "react";
import "./Gallery.css";
import MainTitle from "../MainTitle/MainTitle";
import gallery1 from "../../assests/gallery-01.png";
import gallery2 from "../../assests/gallery-02.png";
import gallery3 from "../../assests/gallery-03.jpg";
import gallery4 from "../../assests/gallery-04.png";
import gallery5 from "../../assests/gallery-05.jpg";
import gallery6 from "../../assests/gallery-06.png";

function Gallery() {
  const Galleries = [
    { img: gallery1 },
    { img: gallery2 },
    { img: gallery3 },
    { img: gallery4 },
    { img: gallery5 },
    { img: gallery6 },
  ];
  return (
    <div className="gallery">
      <MainTitle title={"gallery"} />
      <div className="container">
        {Galleries.map((gallery) => {
          return (
            <div className="box">
              <div className="image">
                <img src={gallery.img} alt="gallery" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
