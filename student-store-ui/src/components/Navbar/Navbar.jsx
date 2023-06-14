import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <div className="navbar-items">
        <div><b>Home</b></div>
        <div><b>About Us</b></div>
        <div><b>Contact Us</b></div>
        <div><b>Buy Now</b></div>
      </div>
    </nav>
  )
}
