import * as React from "react"
import "./Hero.css"
import Logo from "../Logo/Logo";

export default function Hero() {
    return ( <div className="hero">
        <div className="intro">
            <img src="src/images/heroimg.png" alt="Blue, Pink, Purple, and Green gradient aura" className="hero-img" />
            <div className="intro-text">
                <h1>Welcome! Explore the Student Store</h1>
                <h2>Here you can buy anything you want</h2>
            </div>
            
        </div>
        
    </div>);
}