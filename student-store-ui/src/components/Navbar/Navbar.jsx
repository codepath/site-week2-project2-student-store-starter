import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"
export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar-items">
        <Logo/>
        <div className="actions">
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </div>
      </div>
    </nav>
  )
}

