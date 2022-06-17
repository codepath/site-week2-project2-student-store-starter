import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Logo className="logo">Navbar</Logo>
        <ul className="links">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact Us</a>
          <a href="/">Buy Now</a>
        </ul>
      </div>
    </nav>
  )
}
