import * as React from "react"
import "./Navbar.css"
import { Link } from 'react-router-dom'

import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo/>
      <Link to="/">Home</Link>
      <Link to="/About">About Us</Link>
      <Link to="/Contact">Contact Us</Link>
      <Link to="/Buy"> Buy Now</Link>
    </nav>
  )
}
