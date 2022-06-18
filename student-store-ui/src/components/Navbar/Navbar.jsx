import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"
export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar-items">
        <Logo/>
        <div className="actions">
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
          <a href="/#buy-now">Buy Now</a>
        </div>
      </div>
    </nav>
  )
}

