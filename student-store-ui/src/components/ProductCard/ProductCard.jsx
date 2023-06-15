import * as React from "react"
import "./ProductCard.css"

export default function ProductCard({product}) {
  return (
    <div className="product-card">
        {/* name, category, description, image, price, source */}
      <img src={product.image}/>
      <div className="info-box">
        <b>{product.name}</b><br/>
        ${product.price}
      </div>
    </div>
  )
}
