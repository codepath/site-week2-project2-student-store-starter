import * as React from "react";
import "./Home.css";
import "./Hero.css";
import cartPNG from "../../../Assets/cart_logo.png";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Shop from "../Shop/Shop";

function Hero() {
  // displays hero banner
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="cta-text">
          <h1>CodePath</h1>
          <h1>Collectibles</h1>
          <p>Shop all things <b>CodePath Univeristy</b>. From Clothes, Food, and everything in between!</p>
        </div>
        <div className="hero-media floating">
          <img src={cartPNG} alt="shopping art logo" />
        </div>
      </div>
    </div>
  )
}


export default function Home({checkoutCart, dispatch}) {
 
  return (
    <div className="home">
      <Hero />
      <Shop checkoutCart={checkoutCart} dispatch={dispatch} />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
