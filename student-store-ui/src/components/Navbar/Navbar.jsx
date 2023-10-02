import * as React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo">
          <a href="">
            <img
            style={{width: "60px"}}
            src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
              alt="logo"
            />
          </a>
        </div>
        <div className="socials"></div>
        <ul className="links">
          <Link to={"/"}>
            <li>
              <a href="">Home</a>
            </li>
          </Link>
          <li>
            <a href="#About" style={{color: "white"}}>About Us</a>
          </li>
          <li>
            <a href="" style={{color: "white"}}>Contact Us</a>
          </li>
          <li>
            <a href="" style={{color: "white"}}>Buy Now</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}