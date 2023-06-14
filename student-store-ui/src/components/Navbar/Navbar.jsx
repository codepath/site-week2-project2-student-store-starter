import * as React from "react";
import logo from '../../images/code_path_logo.jpeg'

import "./Navbar.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
  return (
    <nav className="navbar">

    <div className="nav-logo">
        <img src={logo} alt="image of code path logo"/>
    </div>
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
