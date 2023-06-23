import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navcontent">
        <div className="logo">

        </div>
        <ul className="pagelinks">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          {/* <li><a href="/purchase-history">Purchase History</a></li> */}
        </ul>
      </div>
    </nav>
        
  )
}
