import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo";
import {HashLink} from 'react-router-hash-link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <div className="links">
        <HashLink to='/'>Home</HashLink>
        <HashLink to='/#About'>About Us</HashLink>
        <HashLink to='/#Contact'>Contact Us</HashLink>
        <HashLink to='/#Buy'>Buy Now</HashLink>
      </div>
    </nav>
  )
}
