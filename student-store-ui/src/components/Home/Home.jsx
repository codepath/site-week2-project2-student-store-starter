import * as React from "react"
import "./Home.css"

import ProductGrid from "./ProductGrid"
import Hero from "./Hero"
import { useState } from "react"

export default function Home({products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart, error, findQuantity}) {
  const [searchedProducts, updateSearchedProducts] = useState([])
  const [selectedCategory, updateSelectedCategory] = useState("all")

 
  const handleSearchItem = (e) => {
    let query = e.target.value.toLowerCase()
    //if (query === "") return

    let results = []
    for (let product of products){
      if(product.name.toLowerCase().includes(query) &&
        (product.category == selectedCategory || 
          selectedCategory == "all")
      ){ 
        results.push(product)
      }
    }
    
    updateSearchedProducts(results)
  }

  const handleCategories = (event) => updateSelectedCategory(event.currentTarget.id)

  
  return (
    <div className="home">
      <p>Home</p>
      <Hero />
      <label htmlFor="search">Search Products:</label>
      <input onChange={handleSearchItem} placeholder="Search here" name="search"></input>

      <div className = "filter-categories">
        <button id = "all" onClick={handleCategories}>All Categories</button>
        <button id = "clothing" onClick={handleCategories}>Clothing</button>
        <button id = "food" onClick={handleCategories}>Food</button>
        <button id = "accessories" onClick={handleCategories}>Accessories</button>
        <button id = "tech" onClick={handleCategories}>Tech</button>
      </div>
      <div className = "home-body">
        <ProductGrid 
          products={searchedProducts.length > 0 ? 
                    searchedProducts : 
                    products.filter(product => (product.category === selectedCategory) || 
                                               (selectedCategory === "all"))} 
          handleAddItemToCart={handleAddItemToCart} 
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          shoppingCart={shoppingCart}
          error = {error}
          findQuantity = {findQuantity}
        /> 
        
      </div>
      <div className="about-us">
        <h3>About Us</h3>
        We are a online student store.
      </div>
      <div className="contact-us">
        Contact us: benjm@fb.com
      </div>
      <div className="footer">
        Footer
      </div>
    </div>

  )
}


