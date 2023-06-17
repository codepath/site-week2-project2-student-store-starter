import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-title">
        <Logo/>
        <h1 className="store-name"> Almaz Gebeya </h1>
      </div>
      <ul>
        <li><Link className="nav-link" to="/">Home</Link></li>
        <li><Link className="nav-link" to="/about">About Us</Link></li>
        <li><Link className="nav-link" to="/contact">Contact Us</Link></li>
        <li><Link className="nav-link" to="/buy-now">Buy Now</Link></li>
      </ul>
    </nav>
  )
}
