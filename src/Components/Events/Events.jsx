import React from "react";
import "./Events.css";
import event from "../../assests/events.png";
import MainTitle from "../MainTitle/MainTitle";

function Events() {
  const times = [
    { duration: 10, title: "Days" },
    { duration: 20, title: "Hours" },
    { duration: 30, title: "Minutes" },
    { duration: 40, title: "Seconds" },
  ];
  return (
    <div className="events">
      <MainTitle title={"LATEST EVENTS"} />
      <div className="container">
        <img src={event} alt="event" />
        <div className="info">
          <div className="time">
            {times.map((time) => {
              return (
                <div className="unit">
                  <span>{time.duration}</span>
                  <span>{time.title}</span>
                </div>
              );
            })}
          </div>
          <h3>Tech Masters Event 2021</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            architecto ipsum veniam deserunt perspiciatis. Eligendi optio
            aperiam, esse numquam rem autem vero! Autem nulla, quasi facere
            deserunt totam maxime culpa?
          </p>
        </div>
        <div className="subscribe">
          <input type="email" placeholder="Write Your Email" />
          <input type="submit" value="Subscribe" />
        </div>
      </div>
    </div>
  );
}

export default Events;
