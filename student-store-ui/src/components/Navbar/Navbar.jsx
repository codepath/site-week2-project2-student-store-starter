import * as React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <Link to="home">Home</Link>
        <Link to="about-us">About Us</Link>
        <Link to="contact-us">Contact Us</Link>
        <Link to="buy-now">Buy now</Link>
      </ul>
    </nav>
  )
}
