import * as React from "react" 
import store from "/Users/duynguyen/Desktop/codepath/tdd-student-store-starter/student-store-ui/src/assets/student_store_icon.18e5d61a.svg"
import "./Hero.css"
export default function Hero() {
    return (
        <div className="hero">
            <div className="content">
                <div className="intro">
                    <h1>Welcome!</h1>
                    <h1>Find Your Merch!</h1>
                    <span>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</span>
                </div>
                <div className="hero-media">
                    <img src={store} alt="hero picture" className="hero-img" />
                </div>
            </div>
        </div>
    )
}