import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <Logo/>
        <div className="actions">
          <p>home?</p>
          <p>about?</p>
          <p>idk</p>
        </div>
      </div>
    </nav>
  )
}

