import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <a href="#home">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#contact-us">Contact Us</a>
        <a href="#buy-now">Buy now</a>
      </ul>
    </nav>
  )
}
