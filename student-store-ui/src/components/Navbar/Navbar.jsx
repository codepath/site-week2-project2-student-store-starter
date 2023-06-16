import * as React from "react"
import "./Navbar.css"
import { BrowserRouter, Routes, Route, useActionData } from 'react-router-dom'
import About from "../About/About"
import Contact from "../Contact/Contact"
import { Link } from 'react-router-dom'
import { UNSAFE_useRoutesImpl } from "react-router"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
      <div className="company-logo">
        <a href="/"><img src={"https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"} alt="codepath logo" className="logo-img" ></img></a>
       
      </div>
      <section className = "socials">
          <img src={"https://www.transparentpng.com/download/linkedin/linkedin-shiny-icon-png-0.png"} alt="linked in logo" className="linkedin-logo-img"></img>
          <img src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"} alt="twitter logo" className="twitter-logo-img"></img>
          <img src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"} alt="insta logo" className="insta-logo-img"></img>
          <img src={"https://www.transparentpng.com/download/facebook-logo-png/facebook-logo-free-download-transparent-3.png"} alt="facebook logo" className="facebook-logo-img"></img>
      </section>

      <ul className="links">

        <li><a href="/">Home</a></li>
         
        {/* apply an id so i can jump to it on the same page for a link component */}

        {/* <Link to={"#Contact"}>   Contact Us   </Link> */}
{/* <Link to={"#Buy"}>   Buy   </Link> */}
        <li><a href="/#About">About Us</a></li>
        <li><a href="/#Contact">Contact Us</a></li>
        <li><a href="/#Buy">Buy Now</a></li>
        </ul> 
      </div>

    </nav>
  )
}