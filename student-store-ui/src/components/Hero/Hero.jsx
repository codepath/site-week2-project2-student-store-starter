import * as React from "react"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero">
    <div className="content">
    <div className="intro"> 
    <h7>Welcome!</h7>
        <h7>Find Your Merch!</h7>
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
