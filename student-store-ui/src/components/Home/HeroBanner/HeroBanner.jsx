import "./HeroBanner.css"
import * as React from "react"

export default function HeroBanner() {
    return (
        <div className = "herowrapper">
            <div className="hero">
                
                <h1 className="intro">Welcome!</h1>
                <h1 className = "merch">Find your merch!</h1>
                <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
            </div>
            <div className="img">
                <img src="../../src/house.png" alt="" className="hero-img" />
            </div>
        </div>
        
    )
}