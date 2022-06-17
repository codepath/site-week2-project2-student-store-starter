import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="../../../assets/icons8-alien-monster-emoji-96.png" alt="Alien Monster Emoji" width="60" heigh="60" />  
      <a href="#"><i class="fa fa-dollar"></i> Buy Now!</a>
      <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
      <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact Us</a> 
      <a href="#"><i class="fa fa-group"></i> About Us</a> 
      <a href="#"><i class="fa fa-fw fa-home"></i> Home</a>
    </nav>
  )
}

export function Logo() {
  return (
    <div className="logo">
      <p>I'm the logo</p>
    </div>
  )
}