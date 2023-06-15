import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { BrowserRouter, Link, Route } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo></Logo>
      <div className="menu">
        {/* <Link to="/about>" */}
        <button id="home" className="nav-button">Home</button>
        <button id="about" className="nav-button">About Us</button>
        <button id="contact" className="nav-button">Contact Us</button>
        <button id="info" className="nav-button">Resources</button>
      </div>
    </nav>
  )
}
