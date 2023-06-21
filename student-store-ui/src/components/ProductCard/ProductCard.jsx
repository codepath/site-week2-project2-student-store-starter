import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard({product}) {
  return (
      <div className="card">
        <Link to={`products/${product.id}`}>
        {/* <img className="small-image" src={product.image} alt="product cover" /> */}
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
      </Link>
    </div>
  )
}
