import * as React from "react"
import "./ProductCard.css"
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
export default function ProductCard({product, productId, quantity, handleAddItemsToCart, handleRemoveItemToCart, showDescription}) {
  // const handleExpansion(product) => {
  
  // };
  return (
    <section className="product-card">
      <div class="product-card">
      <div className="product-name"><h1>{product.name}</h1></div>
        {/* <div className="product-price">${price}</div> */}
        {/* TODO: FIX according sto specifications */}
        <Link to={"/products/" + product.id}> 
        {/* TODO: Get it to navigate to description page when clicked */}
            <img className="product-img" src={product.image}></img>
        </Link>
        <div className="container">
        <button className="add" onClick={() => handleAddItemsToCart(productId)}>
            <h3>+</h3>
        </button>
        <button className="remove" onClick={() => handleRemoveItemToCart(productId)}>
            <h3>-</h3>
        </button>
        </div>
        <div className="product-price">
            <p className="price">Price: ${product.price}</p>
        </div>
        <div className="product-quantity">
            <p className="quantity" >Left: {product.quantity}</p>
        </div>
        {showDescription == true
          ? <div className="product-description"><p className="description">{product.description}</p></div>
          :<div></div>
        }
      </div> 
    </section>
  )
}
 