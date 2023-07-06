import * as React from "react"
import "./ProductGrid.css"
import { Link } from "react-router-dom"
import ProductCard from "../ProductCard/ProductCard"
import { useState } from "react"

export default function ProductGrid({ products, setCartItems, cartItems, quantity, setQuantity }) 

{
  return (
    <div className="product-grid">
      <div className="grid-content">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} setCartItems={setCartItems} cartItems={cartItems} quantity={quantity} setQuantity={setQuantity}/>
        ))}
      </div>
    </div>
  );
}
