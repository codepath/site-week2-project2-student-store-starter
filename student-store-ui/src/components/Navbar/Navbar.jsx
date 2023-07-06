import * as React from "react"
import "./Navbar.css"
import "../Home/Home.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <a href="/">
          <button className ="navbar-link-button">Home</button>
        </a>
        <a href="#about-section">
          <button className ="navbar-link-button">About Us</button>
        </a>
        <a href="#footer">
          <button className ="navbar-link-button">Contact Us</button>
        </a>
        <a href="#item-grid">
          <button className ="navbar-link-button">Buy Now</button>
        </a>
      </div>
    </nav>
  )
}
