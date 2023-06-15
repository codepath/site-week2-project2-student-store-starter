import * as React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid({products, category, searchTerm}) {
  let selectedProducts = searchTerm === "" ? products
    : products?.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))


  console.log(selectedProducts)

  return (
    <section className="product-grid">
      {selectedProducts?.length === 0 ? <p>No products avalible</p> 
      : selectedProducts?.map((product, index) => {
        if (category === "All Categories") {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard 
                product={product}
                key={index}
              />
            </Link>
          )
        } else if (category.toLowerCase() === product.category) {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard 
                product={product}
                key={product.id}
              />
            </Link>
          )
        }
      })}
    </section>
  )
}