import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
// import Header from "../Header/Header";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="nav-bar-sec">
        <div className="links">
          <ul>
            <Logo />
            <li>
              <Link>Buy Now</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
