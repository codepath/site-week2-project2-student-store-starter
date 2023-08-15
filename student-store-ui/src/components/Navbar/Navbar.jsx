import * as React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

export default function Navbar({ setShoppingCart, shoppingCart }) {
  return (
    <nav className="navbar">
      <Sidebar setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} />

      <Link to="/">
        <Logo prop={"nav-logo"} />
      </Link>
      <div className="socials">
        <FontAwesomeIcon
          className="codePathHandle"
          title="CodePath Twitter"
          href="https://twitter.com/codepath"
          target="_blank"
          icon={fab.faTwitter}
          size="xl"
        />

        <FontAwesomeIcon
          className="codePathHandle"
          title="CodePath Instagram"
          href="https://www.instagram.com/codepathorg/?hl=en"
          target="_blank"
          icon={fab.faInstagram}
        />

        <FontAwesomeIcon
          className="codePathHandle"
          title="CodePath Facebook"
          href="https://www.facebook.com/codepath.org/"
          target="_blank"
          icon={fab.faFacebook}
        />
      </div>
      <ul className="menu-links">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <a href="#about-container" className="nav-link">
            About Us
          </a>
        </li>
        <li>
          {" "}
          <a href="#contact" className="nav-link">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#buy-now" className="nav-link">
            Buy Now
          </a>
        </li>
      </ul>
    </nav>
  );
}
