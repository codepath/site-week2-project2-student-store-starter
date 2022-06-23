import * as React from "react"
import Logo from "../Logo/Logo"
import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="content">
          <Logo />
          <div className="socials">
            <a href="https://twitter.com/codepath?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/codepathorg/?hl=en" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/codepath.org/" target="_blank"><i className="fa-brands fa-facebook-square"></i></a>
          </div>
          <ul className="links">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#buy">Buy Now</a></li>
            <li><Link to="/orders">My Orders</Link></li>
          </ul>
        </div>
    </nav>
  )
}
