import * as React from "react"
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./Navbar.css"

export default function Logo() {
  return (
    <div className="logo">
    <Link to="/"><img src="../../../assets/icons8-alien-monster-emoji-96.png" alt="Alien Monster Emoji" width="35px" heigh="35px"/></Link>  
    </div>
  )
}