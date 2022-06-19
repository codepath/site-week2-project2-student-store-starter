import * as React from "react"
import Logo from "./Logo"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <div className="nav-links">
          <a href="#"><i className="fa fa-dollar"></i> Buy Now!</a>
          <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
          <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact Us</a> 
          <a href="#"><i className="fa fa-group"></i> About Us</a> 
          <a href="#"><i className="fa fa-fw fa-home"></i> Home</a>
        </div>
        <Logo /> 
      </nav>
    </div>
  )
}