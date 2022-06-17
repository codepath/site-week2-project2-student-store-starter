import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>

        <li>
          <a className="dropdown-item" href="/">Home</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Buy Now</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">About</a>
        </li>
        <li>
          <a className="dropdown-item" href="#">Contact Us</a>
        </li>
        
      </ul>
      
    </nav>
  )
}
