import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href='/#About'>About Us</a>
        </li>
        <li>
          <a href='/#Contact'>Contact Us</a>
        </li>
        <li>
          <a href='/#Buy'>Buy Now</a>
        </li>
      </ul>
    </nav>
  )
}
