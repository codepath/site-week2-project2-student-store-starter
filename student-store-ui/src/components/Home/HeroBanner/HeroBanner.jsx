import "./HeroBanner.css"
import * as React from "react"

export default function HeroBanner() {
    console.log("herobanner")
    return (
        <section className = "HeroBanner">
            <h1>Welcome!</h1>
            <h1>Find your merch!</h1>
            <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
        </section>
    )
}