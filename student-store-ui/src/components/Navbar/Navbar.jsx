import * as React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="header">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-links-div">
          <Link to="/" className="nav-links"> Home </Link>
          <Link to="/" className="nav-links"> About Us </Link>
          <Link to="/contact-us" className="nav-links"> Contact Us </Link>
          <Link to="/" className="nav-links"> Buy Now </Link>
          <Link to="/product-details" className="nav-links"> Product Details</Link>
        </div>
      </div>
    </nav>
  )
}
