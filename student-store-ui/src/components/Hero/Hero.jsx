import * as React from "react"
import "./Hero.css"
import { BrowserRouter, Link } from "react-router-dom"

export default function Hero() {
  return (
    <div className="hero">
    <div className="content">
    <div className="intro"> 
    <h2>Welcome!</h2>
        <h2>Find Your Merch!</h2>
        <p>We have all kinds of goodies. Click on any of the items to start filling 
        up your shopping cart. Checkout whenever you're ready.</p>
        </div>
        <div className="media">
        <img className="hero-img" src="https://cdn-icons-png.flaticon.com/512/195/195492.png"/>
        </div>
        </div>
    </div>
  )
}
