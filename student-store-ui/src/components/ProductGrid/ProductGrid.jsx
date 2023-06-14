import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid({products, category, searchTerm}) {
  let selectedProducts = searchTerm === "" ? products
    : products?.filter(product => product.name.toLowerCase().includes(searchTerm))

  console.log(selectedProducts)
  return (
    <section className="product-grid">
      {selectedProducts?.map((product) => {
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