import * as React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../globals.css"
import Socials from "../Socials/Socials";
import CodePathLogo from "../../../Assets/logo.svg";

function Links() {

  return (
    <ul className="links">
      <li>
        <Link to="/">
          <div className="social-link">
            Home
          </div>
        </Link>
      </li>
      <li>
        <Link to="/#shop">
          <div className="social-link">
            Shop Now
          </div>
        </Link>
      </li>
      <li>
        <Link to="/#about">
          <div className="social-link">
            About Us
          </div>
        </Link>
      </li>
      <li>
        <Link to="/#contact">
          <div className="social-link">
            Contact Us
          </div>
        </Link>
      </li>
    </ul >
  )
}
function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img src={CodePathLogo} alt="codepath logo" />
      </a>
    </div>
  )
}

export default function Navbar() {
  return (
    <nav className="navbar" name="navigation bar" >
      <div className="navbar-content">
        <Logo />
        <Links />
        <Socials />
      </div>
    </nav>
  )
}
