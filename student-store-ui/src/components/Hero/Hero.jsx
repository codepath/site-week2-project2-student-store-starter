import * as React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <div className="intro">
          <h1>Welcome to Jiapsyh's store!</h1>
          <p>
            Support an amazing, intelligent, hardworking friend of mine today! 🙈💕
          </p>
        </div>

        <div className="media">
          <img
            src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
            alt="logo"
            className="hero-img"
          ></img>
        </div>
      </div>
    </div>
  );
}