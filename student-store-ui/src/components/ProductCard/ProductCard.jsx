import * as React from "react"
import "./ProductCard.css"

export default function ProductCard(props) {
    return (
      <div className="product-card">
        <img className="image" src={props.product.image} alt="Product cover" />
        <p>{props.product.name}</p>
        <p>{props.product.price}</p>
      </div>
    )
  }