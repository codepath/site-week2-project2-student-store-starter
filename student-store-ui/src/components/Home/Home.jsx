import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home({products, searchInput, currentCategory, cartItems, setCartItems}) {
  return (
    <div className="home">
          <ProductGrid products = {products} searchInput={searchInput} currentCategory={currentCategory} cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  )
}