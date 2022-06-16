import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <Logo />
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Buy Now!</li>
      </ul>
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