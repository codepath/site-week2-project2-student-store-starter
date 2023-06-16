import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home({products, searchInput, currentCategory}) {
  return (
    <div className="home">
          <ProductGrid products = {products} searchInput={searchInput} currentCategory={currentCategory}/>
    </div>
  )
}