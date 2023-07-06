import * as React from "react"
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="topnavbar">
      <ul>
        <Link to="/">
        <li><a href="#home">Home</a></li>
        </Link>
        <li><a href="#about">About us</a></li>
        <li><a href="#contact">Contact us</a></li>
        {/* <li><a href="#buy">Buy Now</a></li> */}
      </ul>
    </nav>
  )
}
