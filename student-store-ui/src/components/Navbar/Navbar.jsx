import * as React from "react";
import "./Navbar.css";
import Twitter from "../App/Images/Twitter_icon.png";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo"></div>
      </div>
      <div className="socials">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Instagram-Outline-1024.png" />
        <img src={Twitter} />
        <img src="student-store-ui/src/components/App/Images/instagram_logo.png" />
        <img src="../components/App/Images/facebook_logo.png" />
      </div>
      <div className="links">
        <Link to="/contact">Contact</Link>
        {/* <Link to="/about">About</Link> */}
        {/* <span>Buy Now</span> */}
      </div>
      <Outlet />
    </nav>
  );
}
