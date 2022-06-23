import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import SearchBar from "../SearchBar/SearchBar"

export default function Home({products, shoppingCart, handleAddItemToCart, handleRemoveItemFromCart}) {
  return (
    <div className="home">
      <Hero />
      <SearchBar />
      <ProductGrid 
        products={products}
        handdleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
    </div>
  )
}
