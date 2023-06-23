import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Link to={"/"}>
        <img className="navbar-logo" src="https://bf93818f-b41b-4ca0-932d-b9f1029d7966.id.repl.co/images/CAMR.png"/>
        </Link>
        <ul className="links">
          <Link to={"/"}>
          <li >Home</li>
          </Link>
          <Link to={"/about"}>
          <li>About Us</li>
          </Link>
          <Link to={"/contact"}>
          <li>Contact Us</li>
          </Link>
          <Link to={'/'}>
          <li>Buy Now</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
