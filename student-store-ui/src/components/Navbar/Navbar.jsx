import * as React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import Logo from "../Logo/logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <Logo />
      </Link>
      <div className="navbar-items">
        <Link to="/">
          <div>
            <b>Home</b>
          </div>
        </Link>
        <Link to="#about">
          <div>
            <b>About Us</b>
          </div>
        </Link>
        <Link to="#contact">
          <div>
            <b>Contact Us</b>
          </div>
        </Link>
        <Link to="#product-grid">
          <div>
            <b>Buy Now</b>
          </div>
        </Link>
      </div>
    </nav>
  )
}
