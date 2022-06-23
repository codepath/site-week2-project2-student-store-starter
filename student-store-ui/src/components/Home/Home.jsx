import * as React from "react"
import ProductsGrid from "./ProductsGrid/ProductsGrid"
import HeroBanner from "./HeroBanner/HeroBanner"
import Footer from "../Footer/Footer"
import "./Home.css"

export default function Home({products, handleAddItemToCart, handleRemoveItemFromCart}) {
  return (
    <section>
      <HeroBanner/>
      <ProductsGrid products={products}/>
    </section>
    
    // <div className="home">
      
    // </div>
  )
}
