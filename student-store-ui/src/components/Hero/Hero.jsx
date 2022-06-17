import * as React from "react"
// import HeroImage from "./assets/Hero-Illustration.svg"
import HeroImage from "/src/assets/Hero-Illustration.svg"
import "./Hero.css"

export default function Hero() {
  return (
    <div className="hero">
      <div className="intro">
        <h1>Welcome!</h1>
        <h2>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</h2>
      </div>
      <img className="hero-img" src={HeroImage} alt="Flat design illustration of a woman looking at her purchased goods"></img>

    </div>
  ) 
}