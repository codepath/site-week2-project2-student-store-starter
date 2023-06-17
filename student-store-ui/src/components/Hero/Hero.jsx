import * as React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    // <div className="hero">
    //   <div className = "stuff">
    //     <div className = "intro" >
    //   <h1>Welcome!</h1>
    //   <h1>Find your Merch!</h1>
    //   <p>We have all kinds of goodies.
    //     Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
    //   </div>
    //       <div className = "pic">
    //          <img src = "https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"/>
    //       </div>

    //   </div>

    // </div>

    <div class="hero">
      <div class="content">
        <div class="intro">
          <h1>Welcome!</h1>
          <h1>Find Your Merch!</h1>
          <p>
            We have all kinds of goodies. Click on any of the items to start
            filling up your shopping cart. Checkout whenever you're ready.
          </p>
        </div>
        <div class="media">
          <img
            src="/assets/student_store_icon.18e5d61a.svg"
            alt="hero"
            class="hero-img"
          />
        </div>
      </div>
    </div>
  );
}
