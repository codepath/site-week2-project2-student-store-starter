import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard({product}) {
    
    return (
        <div className="product-card">
        <Link to={"products/" + product.id}>
        <img src={product.image} alt={product.name} />
        </Link>
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price}</p>
      </div>
  )
}