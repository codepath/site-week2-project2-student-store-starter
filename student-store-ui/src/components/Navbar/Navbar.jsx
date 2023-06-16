import * as React from "react"
import "./Navbar.css"
// import{FaBars, FaTimes} from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="navbar">
    {/* <p>Navbar</p> */}
      <a href="/#">Home</a>
      <a href="/#">About Us</a>
      <a href="/#">Contact Us</a>
      <a href="/#">Buy Now</a>
    
    </nav>
  );
}
