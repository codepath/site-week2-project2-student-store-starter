import * as React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

import "./ProductGrid.css"

import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({ category, searchTerm }) {
  const [products, setProducts] = useState()

  const mockAPI = "https://codepath-store-api.herokuapp.com/store"
  useEffect(() => {
    axios.get(mockAPI)
      .then(response => {
        setProducts(response.data.products)
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