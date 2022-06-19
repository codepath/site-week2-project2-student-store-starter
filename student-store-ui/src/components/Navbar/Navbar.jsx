import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
    <nav >
      <img src="../../../assets/icons8-alien-monster-emoji-96.png" alt="Alien Monster Emoji" width="60" heigh="60" />  
      <a href="#"><i className="fa fa-dollar"></i> Buy Now!</a>
      <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
      <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact Us</a> 
      <a href="#"><i className="fa fa-group"></i> About Us</a> 
      <a href="#"><i className="fa fa-fw fa-home"></i> Home</a>
    </nav>
    </div>
  )
}

export function Logo() {
  return (
    <div className="logo">
      <p>I'm the logo</p>
    </div>
  )
}