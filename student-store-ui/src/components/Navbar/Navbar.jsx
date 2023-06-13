import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className ="navbar-link-button">
        <button>Home</button>
        <button>About Us</button>
        <button>Contact Us</button>
        <button>Buy Now</button>
      </div>
    </nav>
  )
}
