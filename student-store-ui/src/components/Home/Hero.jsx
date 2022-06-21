import * as React from "react"
import "./Home.css"

export default function Hero() {
    return (
        <div className="hero">
            <div className="content">
                <div className="intro">
                    <h1>Welcome!</h1>
                    <h2>Come Buy Some Stuff!</h2>
                    
                </div>
                <div >
                    <img className="hero-img" src="../../../assets/shopping-cart.png" alt="Cart image"/>
                </div>
            </div>
        </div>
    )
  }
