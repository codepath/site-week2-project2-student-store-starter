import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="header-links">
        <Logo />
        <SocialLinks />
      </div>
      <NavLinks />
    </nav>
  )
}

export function SocialLinks() {
  return (
    <nav className="social-links">
      <i className="fab fa-twitter social-link-ico"></i>
      <i className="fab fa-instagram social-link-ico"></i>
      <i className="fab fa-facebook social-link-ico"></i>
    </nav>
  )
}

export function NavLinks() {
  return (
    <nav className="nav-links">
      <Link to={"/"} className="nav-link">Home</Link>
      <Link to={"/#about"} className="nav-link">About Us</Link>
      <Link to={"/#contact"} className="nav-link">Contact Us</Link>
      <Link to={"/#buy"} className="nav-link">Buy Now</Link>
    </nav>
  )
}
