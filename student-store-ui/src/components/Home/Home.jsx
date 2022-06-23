import * as React from "react"
import "./Home.css"
import { Hero } from "../Hero/Hero"
import { ProductGrid } from "../ProductGrid/ProductGrid"
import { SubNavBar } from "../SubNavBar/SubNavBar"

export default function Home({
  products, 
  handleAddItemToCart, 
  handleRemoveItemToCart, 
  setSearch, 
  setType, 
  type,
  shoppingCart
}) {
  return (
    <div className="home">
      <Hero />
      <SubNavBar 
        setType={setType} 
        setSearch={setSearch} 
        type={type}
      />
      <ProductGrid 
        products={products}
        shoppingCart={shoppingCart} 
        handleAddItemToCart={handleAddItemToCart} 
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
    </div>
  )
}
