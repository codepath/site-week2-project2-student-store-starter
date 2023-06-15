import * as React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

console.log(fab)

export default function Navbar() {
  return (
    <nav className="navbar">

    <Logo prop={"nav-logo"}/>
        
    <div className="socials">
      <a className="codePathHandle" title="CodePath Twitter" href="https://twitter.com/codepath" target="_blank"><FontAwesomeIcon icon={fab.faTwitter} size="xl"/></a>
      <a className="codePathHandle" title="CodePath Instagram" href="https://www.instagram.com/codepathorg/?hl=en" target="_blank"><FontAwesomeIcon icon={fab.faInstagram} /></a>
      <a className="codePathHandle" title="CodePath Facebook" href="https://www.facebook.com/codepath.org/" target="_blank"><FontAwesomeIcon icon={fab.faFacebook} /></a>
    </div>
      <ul className="menu-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          {/* <Link to="/about">About Us</Link> */}
          <a href="#about" className="nav-link">
            About Us
          </a>
        </li>
        <li>
          {" "}
          <a href="/" className="nav-link">
            Contact Us
          </a>
        </li>
        <li>
         <a href="/" className="nav-link">
          Buy Now
        </a>
        </li>
      </ul>
    </nav>
  );
}
