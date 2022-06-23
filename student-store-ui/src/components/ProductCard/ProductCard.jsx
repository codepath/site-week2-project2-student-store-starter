import * as React from "react"
import "./ProductCard.css"
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
export default function ProductCard({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {
  return (
    <section className="product-card">
      <div class="product-card">
      <div className="product-name"><h1>{product.name}</h1></div>
        {/* <div className="product-price">${price}</div> */}
        {/* TODO: FIX according sto specifications */}
        <Link to="/products/"> 
        {/* TODO: Get it to navigate to description page when clicked */}
            <img className="product-img" src={product.image}></img>
        </Link>
        <button className="add" onClick={handleAddItemToCart}>
            <h3>+</h3>
        </button>
        <button className="remove" onClick={handleRemoveItemToCart}>
            <h3>-</h3>
        </button>
        <div className="product-price">
            <h3>Price: ${product.price}</h3>
        </div>
        <div className="product-quantity">
            <h3>Left: {product.quantity}</h3>
        </div>
      </div> 
    </section>
  )
}
 