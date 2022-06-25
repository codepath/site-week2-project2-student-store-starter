import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import About from "../About/About"
import ProductGrid from "../ProductGrid/ProductGrid"
import Contact from "../Contact/Contact"
import {useState} from "react"

export default function Home(props) {

  const [query, setQuery] = useState("")

  const sortByCategory =
    props.selectedCategory != "All Categories"
      ? props.products.filter((product) => product.category === props.selectedCategory.toLowerCase()) : props.products



    

 const sortBySearch =
    query != ""
      ? props.products.filter((product) => product.name.includes(query)) : sortByCategory 



  return (
    <div className="home">
      <div className="hero-container">
        <Hero />
      </div>





      <div className = "search-bar">
        <form id="form"> 
            <input type="search-input" onChange={(e) => setQuery(e.target.value)}id="search-in" name="productName" placeholder="Search..."></input>
            <button id="search-btn"><i id = "search-icon" className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <button id = "my-cart"> My Cart <i className="fa-solid fa-cart-shopping"></i></button>
      </div>

      <span className = "category-list">
        
        <span className = "category-menu"><i className="fa-solid fa-bars"></i></span>
        <span className = "category" onClick= {() => props.setSelectedCategory("All Categories")}>All Categories</span>
        <span className = "category" onClick= {() => props.setSelectedCategory("Clothing")}>Clothing</span>
        <span className = "category" onClick= {() => props.setSelectedCategory("Food")}>Food</span>
        <span className = "category" onClick= {() => props.setSelectedCategory("Accessories")}>Accessories</span>
        <span className = "category" onClick= {() => props.setSelectedCategory("Tech")}>Tech</span>
      </span>
      

      <div className = "grid">

         <ProductGrid products = {sortBySearch} handleAddItemToCart = {props.handleAddItemToCart} handleRemoveItemFromCart = {props.handleRemoveItemFromCart} shoppingCart = {props.shoppingCart}/> 

      </div>


      <h2 className = "about-header"> About</h2>
      <div className = "about-container">
        <About />
      </div>

      <h2 className = "contact-header"> Contact</h2>
      <div className = "contact-container">
        <Contact />
      </div>
    </div>
  )
}
