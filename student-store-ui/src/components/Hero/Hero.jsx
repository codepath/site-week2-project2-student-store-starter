import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <p className="intro">Welcome!</p>
      <p className="find-merch">Find Your Merch!</p>
      <p className="message">
        We have all kinds of goodies. Click on any of the items to start filling
        up your shopping cart. Checkout whenever you're ready.
      </p>
      <img
        className="hero-img"
        src="	https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
      />
    </div>
  );
};

export default Hero;
