import * as React from "react"
// import { HasLink } from 'react-router-hash-link';
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
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
          </div>

          <ul className="links">
            <li>
              {/* <HasLink to="/">Home</HasLink>  */}
            </li>
            <li>
              {/* <HasLink to="/#About">About Us</HasLink>  */}
            </li>
            <li>
            {/* <Link to="/#Contact">Contact Us</Link>  */}
            </li>
            <li>
            {/* <Link to="/#Buy">Buy Now</Link>  */}
            </li>
          </ul>
        </div>
      </nav>
      </>
  )
}
