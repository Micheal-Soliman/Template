import React from "react";
import "./Discount.css";
import discount from "../../assests/discount.png";

function Discount() {
  return (
    <div className="discount">
      <div className="image">
        <div className="content">
          <h2>We Have A Discount</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            dolorum inventore placeat pariatur natus accusantium deleniti atque,
            repellendus enim. Fugiat error praesentium quibusdam optio sequi nam
            voluptatem sapiente incidunt explicabo.
          </p>
          <img src={discount} alt="discount" />
        </div>
      </div>
      <div className="form">
        <div className="content">
          <h2>Request A Discount</h2>
          <form>
            <input type="text" placeholder="Type Your Name" />
            <input type="email" placeholder="Type Your Email" />
            <input type="number" placeholder="Type Your Phone Number" />
            <textarea placeholder="Tell Us About Your Needs" cols="30" rows="10"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Discount;
