import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo></Logo>
      <div className="navigation">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#About">About Us</a>
          </li>
          <li>
            <a href="/#Contact">Contact Us</a>
          </li>
          <li>
            <a href="/">Buy Now</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
