import React from "react";
import "./Pricing.css";
import MainTitle from "../MainTitle/MainTitle";
import { Link } from "react-router-dom";
import host1 from "../../assests/hosting-basic.png";
import host2 from "../../assests/hosting-advanced.png";
import host3 from "../../assests/hosting-professional.png";

function Pricing() {
  const Prices = [
    {
      title: "Basic",
      img: host1,
      price: "$15",
      duration: "Per Month",
      detail1: "10GB HDD Space",
      detail2: "5 Email Addresses",
      detail3: "2 Subdomains",
      detail4: "4 Databases",
      detail5: "Basic Support",
    },
    {
      title: "Advanced",
      img: host2,
      price: "$25",
      duration: "Per Month",
      detail1: "20GB HDD Space",
      detail2: "10 Email Addresses",
      detail3: "5 Subdomains",
      detail4: "8 Databases",
      detail5: "Advanced Support",
    },
    {
      title: "Professional",
      img: host3,
      price: "$45",
      duration: "Per Month",
      detail1: "50GB HDD Space",
      detail2: "20 Email Addresses",
      detail3: "10 Subdomains",
      detail4: "20 Databases",
      detail5: "Professional Support",
    },
  ];
  return (
    <div className="pricing">
      <MainTitle title={"PRICING PLANS"} />
      <div className="container">
        {Prices.map((price) => {
          return (
            <div className = {`box ${price.title == "Advanced" && 'popular'}`}>
              {price.title == "Advanced" && <div className="label">Most Popular</div>}
              <h3>{price.title}</h3>
              <img src={price.img} alt="" />
              <div className="price">
                <span>{price.price}</span>
                <span>{price.duration}</span>
              </div>
              <ul>
                <li>{price.detail1}</li>
                <li>{price.detail2}</li>
                <li>{price.detail3}</li>
                <li>{price.detail4}</li>
                <li>{price.detail5}</li>
              </ul>
              <Link to="/#">Choose Plan</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
