import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* array declaration */}
      <ul className="links">
          {/* array components */}
          <li><a href="">Home</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Buy Now</a></li>
        </ul>
    </nav>
  )
}
