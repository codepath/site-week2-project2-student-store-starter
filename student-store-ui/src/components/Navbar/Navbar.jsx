import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
      <nav className="navbar" name="navigation bar" >
        <div class="navbar-content">
          <div className="logo"></div>
          <div className="socials"> </div>
          <ul className="links">
            <li><a href="/">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Buy Now</a></li>
          </ul>
        </div>
        <p>Navbar</p>
      </nav>
  )
}
