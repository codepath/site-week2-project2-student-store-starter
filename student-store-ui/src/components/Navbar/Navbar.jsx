import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="socials">
            {/* <a className="icons" href="twitter.com">
              <img className="logo-pic" src="./assets/imgs/twitter-logo.jpeg" ></img>
            </a> 
            <a className="icons" href="facebook.com">
              <img className="logo-pic" src="./assets/imgs/fb-logo2.png"></img>
            </a>
            <a className="icons" href="instagram.com">
               <img className="logo-pic instagram" src="./assets/imgs/instagram-logo.webp"></img>
            </a> */}
        </div>
        <ul className="links">
          <li>
            <a className="pages" href="">Home</a>
          </li>
          <li>
            <a className="pages" href="#About">About</a>
          </li>
          <li>
            <a className="pages" href="#Contact">Contact</a>
          </li>
          <li>
            <a className="pages" href="#Buy">Buy</a>
          </li>
        </ul>
      </div>
      {/* <p>Navbar</p> */}
    </nav>
  )
}
