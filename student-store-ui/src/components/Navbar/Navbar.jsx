import * as React from "react"
import "./Navbar.css"
import Logo from "../Navbar/Logo/Logo"
import { BrowserRouter, Link } from "react-router-dom"


export default function Navbar() {

  return (
    <nav className="navbar">
      <Link to = "/" className="navLink">Home</Link>
      <Link to = "/" className="navLink">About Us</Link>
      <Link to = "/#contact" className="navLink">Contact Us</Link>
      <Logo />
    </nav>
    
  )
}


