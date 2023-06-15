import * as React from "react"
import "./ProductCard.css"

export default function ProductCard({product}) {
    
    return (
        <div className="product-card">
        <img src={product.image} alt={product.name} />
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price}</p>
      </div>
  )
}