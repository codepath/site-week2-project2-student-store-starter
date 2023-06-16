import * as React from "react"
import "./Home.css"
import ProductGrid from '../ProductGrid/ProductGrid';

export default function Home({products}) {
  return (
    <div className="home">
          <div className="home">
      
      <ProductGrid products={products} />
     
    </div>
    </div>
  )
}
