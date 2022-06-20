import * as React from "react"
import ProductGrid from "../ProductGrid/ProductGrid"
import "./Home.css"

export default function Home({products, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className="home">
      <p>Home</p>
      <Hero/>
      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
    </div>
  )
}
