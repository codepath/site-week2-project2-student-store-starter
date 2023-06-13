import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <img className="navbar-logo" src="https://bf93818f-b41b-4ca0-932d-b9f1029d7966.id.repl.co/images/CAMR.png"/>
        <ul className="links">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Buy Now</li>
        </ul>
      </div>
    </nav>
  )
}
