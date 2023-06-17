import { Link } from "react-router-dom"
import * as React from "react"
import "./Navbar.css"
import logo from "../../assets/codepath.svg"
import twitter from "../../assets/twitter.png"

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="content">
        <div className="logo">
        <Link to="/">
          <img src={logo} alt="codepath logo" />
        </Link>
        </div>
        <ul className="links">
          <a href="/"><li>Home</li></a>
          <a href="#about"><li>About Us</li></a>
          <a href=""><li>Contact Us</li></a>
          <a href=""><li>Buy Now</li></a>
        </ul>
      </div>
      <div className="socials">
        <img src="src/assets/twitter.png" width="25px" className="social-icon"></img>
        <img src="src/assets/facebook.png" width="25px" className="social-icon"></img>
        <img src="src/assets/instagram.png" width="25px" className="social-icon"></img>
      </div>
    </nav>
  )
}
