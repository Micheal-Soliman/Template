import React from "react";
import "./Videos.css";
import { FaRandom } from "react-icons/fa";
import video from "../../assests/video-preview.jpg";
import MainTitle from "../MainTitle/MainTitle";

function Videos() {
  const videos = [
    { title: "How To Create Sub Domain aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", duration: "05:18" },
    { title: "Playing With The DNS", duration: "03:18" },
    { title: "Everything About The Virtual Hosts", duration: "05:25" },
    { title: "How To Monitor Your Website", duration: "04:16" },
    { title: "Uncharted Beating The Last Boss", duration: "07:48" },
    { title: "Ys Oath In Felghana Overview", duration: "03:12" },
    { title: "Ys Series All Games Ending", duration: "08:10" },
  ];
  return (
    <div className="videos">
        <MainTitle title={'TOP VIDEOS'} />
      <div className="container">
        <div className="holder">
          <div className="list">
            <div className="name">
              Top Videos
              <FaRandom />
            </div>
            <ul>
              {videos.map((video) => {
                return (
                  <li title={video.title}>
                    <span>{video.title}</span>
                    <span>{video.duration}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="preview">
            <img src={video} alt="video" />
            <div>Everything About The Virtual Hosts</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
