import * as React from "react"
import "./ProductCard.css"

export default function ProductCard({product}) {
  return (
    <div className="card">
      <img className="small-image" src={product.image} alt="product cover" />
      <div className="product-info">
        <div className="main-info">
          <p className="product-name">{product.name}</p>
          <div className="stars"></div>
          <p className="product-price">{product.price}</p>
        </div>
        <div className="actions">
          <div className="buttons">
            <button className="add">
              <i className="material-icons">add</i>
            </button>
            <button className="remove">
              <i className="material-icons">remove</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
