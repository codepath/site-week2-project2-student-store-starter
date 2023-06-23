import * as React from "react"
import "./Navbar.css"
import logo from "../../images/logo.png"
import {Link} from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"

export default function Navbar({setShoppingCart, shoppingCart}) {


  return (
    <>
    <Sidebar 
    setShoppingCart={setShoppingCart} 
    shoppingCart={shoppingCart}/>

    <nav className="navbar">
      <div>


        <Link to="/"> 
        <img src={logo} alt="code path logo" id="logo"/>
        </Link>
        <ul style={{ 
          display: "flex",         
          }}>
          <li><a href="/">Home</a></li>
          <li><a href="#About">About Us</a></li>
          <li><a href="#Contact">Contact Us</a></li>
          <li><a href="#buy-now">Buy Now</a></li>
        </ul>
      </div>
    </nav>
    </>
  )
}
