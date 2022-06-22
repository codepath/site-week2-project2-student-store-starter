import * as React from "react"
import Contact from "../Contact/Contact"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import "./Home.css"

export default function Home({products, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className="home">
      {/* {console.log(products)} */}
      <Hero/>
      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
      <Contact/>
    </div>
  )
}
