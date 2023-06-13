import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">

      <Logo />

      <ul className="pageSections">
        <li>
          <a href="#Home">Home </a>
        </li>
        <li>
          <a href="#About">About Us</a>
        </li>

        <li>
          <a href="#Contact">Contact Us</a>
        </li>


        <li>
          <a href="#Buy">Buy Now</a>
        </li>
      </ul>




      </div>


    </nav>
  )
}
