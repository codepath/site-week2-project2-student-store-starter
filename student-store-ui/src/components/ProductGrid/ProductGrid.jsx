import * as React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

import "./ProductGrid.css"

import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({ category, searchTerm, cart, setCart }) {
  const [products, setProducts] = useState()

  const storeURL = "http://localhost:3001/store"
  useEffect(() => {
    axios.get(storeURL)
      .then(response => {
        setProducts(response.data)
      })
  }, [])

  let selectedProducts = searchTerm === "" ? products
    : products?.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <section className="product-grid">
      {selectedProducts?.length === 0 ? <p>No products avalible</p> 
      : selectedProducts?.map((product, index) => {
        if (category === "All Categories") {
          return (
              <ProductCard 
                product={product}
                cart={cart}
                setCart={setCart}
                key={index}
              />
          )
        } else if (category.toLowerCase() === product.category) {
          return (
              <ProductCard 
                product={product}
                key={product.id}
              />
          )
        }
      })}
    </section>
  )
}