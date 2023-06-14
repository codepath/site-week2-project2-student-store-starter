import * as React from "react"
// import { AiOutlineInstagram, BsTwitter, BsFacebook } from "react-icons/fa";
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li></li>
        <li><a href = "/" className="site-home">Home</a></li>
        <li><a href = "/#About">About</a></li>
        <li><a href = "/#Contact">Contact Us</a></li>
        <li><a href = "/#Buy">Buy Now</a></li>
      </ul>
    </nav>
  )
}
