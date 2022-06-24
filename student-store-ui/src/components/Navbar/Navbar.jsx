import * as React from "react"
import "./Navbar.css"
import Logo from "../Navbar/Logo/Logo"
import { BrowserRouter, Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';


export default function Navbar() {

  return (
    <nav className="navbar">
      <Link to = "/" className="navLink">Home</Link>
      <HashLink className="navLink" to="/#about" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
      About Us</HashLink>
      <HashLink className="navLink" to="/#contact" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
      Contact Us </HashLink>
      <Logo />
    </nav>
  )
}


