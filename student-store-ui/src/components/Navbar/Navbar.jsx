import * as React from "react"
import "./Navbar.css"
import logo from "../../images/logo.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="code path logo" id="logo"/>
        <ul style={{ 
          display: "flex",         
          }}>
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html">About Us</a></li>
          <li><a href="index.html">Contact Us</a></li>
          <li><a href="index.html">Buy Now</a></li>
        </ul>
      </div>
    </nav>
  )
}
