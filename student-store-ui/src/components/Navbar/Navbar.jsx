import * as React from "react"
import "./Navbar.css"
import CodePathLogo from "../../../Assets/logo.svg";
import InstagramSVG from "../../../Assets/icons8-instagram.svg";
import TwitterSVG from "../../../Assets/icons8-twitter.svg";
import FacebookSVG from "../../../Assets/icons8-facebook.svg" ;

function Socials() {
  return (
    <div className="social-logo-container">
      <a href="/">
        <img src={InstagramSVG} alt="instagram logo" />
      </a>
      <a href="/">
        <img src={TwitterSVG} alt="twitter logo" />
      </a>
      <a href="/">
        <img src={FacebookSVG} alt="facebook logo" />
      </a>
    </div>
  )
}
function Links(){
  return (
    <ul className="links">
      <li><a className="social-link" href="/">Home</a></li>
      <li><a className="social-link" href="/#About">About Us</a></li>
      <li><a className="social-link" href="/#Contact">Contact Us</a></li>
      <li><a className="social-link" href="/#Buy">Buy Now</a></li>
    </ul>
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
