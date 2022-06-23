import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <div className="buttonContainer">
        <a href="/" className="navbutton"><p>Home</p></a>
        <a href="/" className="navbutton"><p>About Us</p></a>
        <a href="/" className="navbutton"><p>Contact Us</p></a>
        <a href="" className="navbutton"><p>Buy Now</p></a>
      </div>
    </nav>
  )
}
