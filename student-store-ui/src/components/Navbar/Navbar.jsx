import * as React from "react"
import "./Navbar.css"

import logo from '../../assets/logo.png'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">

        <div className="logo">
          <a href="/">
            <img src={logo} alt="codepath logo" />
          </a>
        </div>
        

        <div className="socials">
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
        </div>

        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#About">About Us</a>
          </li>
          <li>
            <a href="/#Contact">Contact Us</a>
          </li>
          <li>
            <a href="/#Buy">Buy Now</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
