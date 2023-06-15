import * as React from "react"
import "./Navbar.css"
import Socials from "../Socials/Socials";
import CodePathLogo from "../../../Assets/logo.svg";


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
