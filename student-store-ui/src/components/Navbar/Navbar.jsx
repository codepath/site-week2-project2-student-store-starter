import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { HashLink } from "react-router-hash-link"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-contents">
        <Logo />
        <NavLinks />
      </div>
    </nav>
  )
}

export function NavLinks() {
  return (
    <nav className="nav-links">
      <HashLink to={"/#"} className="nav-link">Home</HashLink>
      <HashLink to={"/#about"} className="nav-link">About Us</HashLink>
      <HashLink to={"/#contact-us"} className="nav-link">Contact Us</HashLink>
      <HashLink to={"/#buy"} className="nav-link">Shop</HashLink>
    </nav>
  )
}
