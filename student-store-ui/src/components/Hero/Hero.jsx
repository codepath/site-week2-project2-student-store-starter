import * as React from "react"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero">
      <div className="welcome-container">
        <div className = "welcome-headings">
            <h1 className = "heading1"> Welcome!</h1>
            <h1 className = "heading2"> <em>Find Your Merch</em></h1>
            <h3 className = "subheading">We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</h3>
        </div>
        <div className ="welcome-shopify-logo">
            <ShopifyIcon/>
        </div>
      </div>
    </div>
  )
}





export function ShopifyIcon() {
    return (
      <div className="shopify-icon">
        <i className="fa-brands fa-shopify fa-10x"></i>
      </div>
    )
  }