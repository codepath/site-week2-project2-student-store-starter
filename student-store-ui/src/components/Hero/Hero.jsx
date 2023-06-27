import * as React from "react";
import "./Hero.css";
import heroImage from "../assets/hero-image.svg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="intro">Welcome...</h1>
        <h1 className="intro">Let's Set Trends</h1>
        <h3 className="hero-caption">
          We have all kinds of goodies. Click on any of the items to start
          filling up your shopping cart. Checkout whenever you're ready.
        </h3>
      </div>
      <img className="hero-image" src={heroImage} />
    </div>
  );
}
