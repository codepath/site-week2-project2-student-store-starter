import * as React from "react"
import "./Navbar.css"
import Logo from '../Logo/Logo'
import {Outlet} from "react-router-dom"

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="content">
        <Logo />
        <section className = "socials">
            <a href="https://www.linkedin.com/school/codepath-org/" > <img src={"https://www.transparentpng.com/download/linkedin/linkedin-shiny-icon-png-0.png"} alt="linked in logo" className="linkedin-logo-img"></img></a>
            <a href="https://www.google.com/search?q=codepath+instagram&oq=codepath+instagram&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYQDIGCAMQRRhAMgYIBBBFGDwyBggFEEUYPDIGCAYQRRhA0gEIMjAxNGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1" > <img src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"} alt="insta logo" className="insta-logo-img"></img></a>
            <a href="https://www.facebook.com/codepath.org/" > <img src={"https://www.transparentpng.com/download/facebook-logo-png/facebook-logo-free-download-transparent-3.png"} alt="facebook logo" className="facebook-logo-img"></img></a>
            <a href="https://twitter.com/codepath?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"} alt="twitter logo" className="twitter-logo-img"></img> </a>
        </section>

        <ul className="links">

          <li><a href="/">Home</a></li>
          <li><a href="/#About">About Us</a></li>
          <li><a href="/#Contact">Contact Us</a></li>
          <li><a href="/#Buy">Buy Now</a></li>
        </ul> 
      </div>

    </nav>
    <Outlet/>
    </>
  )
}