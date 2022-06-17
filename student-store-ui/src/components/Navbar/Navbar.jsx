import * as React from "react"
import "./Navbar.css"
import codepathLogo from '../codepath_icon.webp'
import {BrowserRouter as Router, Link} from 'react-router-dom';
export default function Navbar() {

   const navLinks = [
    { label: "Home", className: "nav-link" },
    { label: "About Us", className: "nav-link" },
    { label: "Contact Us", className: "nav-link" },
    { label: "Buy Now",  className: "nav-link" },
  ]


  return (
    <nav className="navbar">
      <div className = "navbar-container">
        <CodePathIcon />
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <div className="nav-links">
          <NavLink navLink = "Home" />
          <NavLink navLink = "About Us" />
          <NavLink navLink = "Contact Us" />
          <NavLink navLink = "Buy Now" />
        </div>


      </div>
    </nav>
  )
}


export function NavLink({navLink}) {
  return (
      <span className="nav-links">
        <span className = "nav-link">{navLink}</span>
      </span>
  )
}

export function CodePathIcon() {
  return (
    <div className="codepath-icon">
      <Link to = "/">
        <img className = "logo" src={codepathLogo} alt = "Logo for CodePath"/>
      </Link>
    </div>
  )
}


export function TwitterIcon() {
  return (
    <div className="twitter-icon">
      <i className="fa-brands fa-twitter"></i>
    </div>
  )
}

export function FacebookIcon() {
  return (
    <div className="facebook-icon">
      <i className="fa-brands fa-facebook-f"></i>
    </div>
  )
}


export function InstagramIcon() {
  return (
    <div className="instagram-icon">
      <i className="fa-brands fa-instagram"></i>
    </div>
  )
}