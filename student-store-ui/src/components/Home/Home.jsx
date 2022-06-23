import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"

export default function Home({products, shoppingCart, handleAddItemToCart, handleRemoveItemFromCart}) {
  return (
    <div className="home">
      <Hero />
    </div>
  )
}
