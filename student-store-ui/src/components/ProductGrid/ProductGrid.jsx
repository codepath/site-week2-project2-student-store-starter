import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid({products, category}) {
  return (
    <section className="product-grid">
      {products?.map((product) => {
        if (category === "All Categories") {
          return (
            <ProductCard 
              product={product}
            />
          )
        } else if (category.toLowerCase() === product.category) {
          return (
            <ProductCard 
              product={product}
            />
          )
        }
      })}
    </section>
  )
}