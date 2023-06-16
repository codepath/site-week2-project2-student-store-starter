import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo></Logo>
      <div className="menu">
        {/* <Link to="/about>" */}
        <a className="nav-link" href="/#home">
          <button className="nav-button">Home</button>
        </a>
        <a className="nav-link" href="/#about">
          <button className="nav-button">About Us</button>
        </a>
       <a className="nav-link" href="/#contact">
          <button className="nav-button">Contact Us</button>
        </a>
        <a className="nav-link" href="/#footer">
          <button className="nav-button">Resources</button>
        </a>
      </div>
    </nav>
  )
}
