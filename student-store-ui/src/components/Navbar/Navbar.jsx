import * as React from "react"
import "./Navbar.css"
import Logo from "/Users/ltdeo/CodePath/tdd-student-store-starter/student-store-ui/src/components/Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        
        <Logo />
        
        <div className="link">
          <a href="/" className="link">Home</a>
          <a href="#about" className="link">About</a>
          <a href="#content" className="link">Contact Us</a>
        </div> 
      </div>
    </nav>
  )
}
