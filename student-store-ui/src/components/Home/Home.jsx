import * as React from "react"
import ProductsGrid from "./ProductsGrid/ProductsGrid"
import HeroBanner from "./HeroBanner/HeroBanner"
import Footer from "../Footer/Footer"
import "./Home.css"

export default function Home() {
  return (
    <section>
      <HeroBanner/>
      <ProductsGrid />
    </section>
    
    // <div className="home">
      
    // </div>
  )
}
