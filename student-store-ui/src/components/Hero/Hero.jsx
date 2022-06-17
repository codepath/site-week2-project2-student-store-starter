import * as React from "react"
import "./Hero.css"

export default function Hero(props) {
  return (
    <div className="hero">
      <div className="content">
        <div className="intro">
          <h1>Welcome!</h1>
          <h1>Buy awesome stuff!</h1>
          <p1>We've got everything you could ever need. Click on anything to add them to your shopping cart. Checkout whenever you're satisfied.</p1>
        </div>
        <img className="hero-img"></img>
      </div>
    </div>
  )
}
