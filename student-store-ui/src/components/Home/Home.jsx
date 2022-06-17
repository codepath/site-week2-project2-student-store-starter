import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import About from "../About/About"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home(props) {
  return (
    <div className="home">
      <div className="hero-container">
        <Hero />
      </div>

      <div className = "search-bar">
        <form id="form"> 
            <input type="search-input" id="search-in" name="productid" placeholder="Search..."></input>
            <button id="search-btn"><i id = "search-icon" className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <button id = "my-cart"> My Cart <i className="fa-solid fa-cart-shopping"></i></button>
      </div>

      <span className = "category-list">
        <span className = "category">All Categories</span>
        <span className = "category">Clothing</span>
        <span className = "category">Food</span>
        <span className = "category">Accessories</span>
        <span className = "category">Tech</span>
      </span>
      

      <div className = "grid">
        {/* <ProductGrid products = {props.products}/> */}

      </div>



      <div className = "about-container">
        <About />
      </div>


    </div>
  )
}
