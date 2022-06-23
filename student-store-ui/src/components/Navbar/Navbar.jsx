import * as React from "react"
import "./Navbar.css"
import Logo from "../Navbar/Logo/Logo"
import { BrowserRouter } from "react-router-dom"


export default function Navbar() {

  return (
    <nav className="navbar">
      <a href="">Home</a>
      <a href="">About Us</a>
      <a href="">Contact Us</a>
      <Logo />
    </nav>
    
  )
}


