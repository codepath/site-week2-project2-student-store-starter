import * as React from "react"
import "./Home.css"
import { Hero } from "../Hero/Hero"

export default function Home({products, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className="home">
      <p>Home</p>
      <Hero />
      
    </div>
  )
}
