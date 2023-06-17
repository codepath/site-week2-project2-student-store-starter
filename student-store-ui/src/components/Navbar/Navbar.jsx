import * as React from "react"
import "./Navbar.css"

//This is the navigation bar at the top of the page
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li></li>
        <li><a href = "/" className="site-home">Home</a></li>
        <li><a href = "/#About">About</a></li>
        <li><a href = "/#Contact">Contact Us</a></li>
        <li><a href = "/#Buy">Buy Now</a></li>
      </ul>
    </nav>
  )
}
