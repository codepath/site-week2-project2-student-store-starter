import * as React from "react"
import "./Navbar.css"

import logo from '../../assets/logo.png'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="content">

          <div className="logo">
            <a href="/">
              <img src={logo} alt="codepath logo" />
            </a>
          </div>
          

          <div className="socials">
            <a href="https://twitter.com/codepath">
              <img src={twitter} alt="" />
            </a>
            <a href="https://www.instagram.com/codepathorg/?hl=en">
              <img src={instagram} alt="" />
            </a>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            
          </div>

          <ul className="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#About"> About </a> 
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
      </>
  )
}
