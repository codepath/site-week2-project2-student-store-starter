import * as React from "react";
import "./Hero.css";
import heroimg from "../../images/heroimg.png";

export default function Hero() {
  return (
    <div className="content">
      <div className="intro">
        <h1>Welcome!</h1>
        <h2>Find Your Match</h2>
        <p>
          We have all kinds of goodies. Click on any of the items to start
          filling up your shopping cart. Checkout whenever you're ready.
        </p>
      </div>
      <img
        src={heroimg}
        alt="hero image"
        id="heroimage"
        style={{ display: "flex" }}
      />
    </div>
  );
}
