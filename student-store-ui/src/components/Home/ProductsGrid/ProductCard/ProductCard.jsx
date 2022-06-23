import "./ProductCard.css"
import * as React from "react"
import { Link } from "react-router-dom";

export default function ProductCard({product, quantity, productId, handleAddItemToCart, handleRemoveItemFromCart, showDescription}) {
    
    

    return (
        <div className="product-card">
            {product.price} ='$'.concat({product.price}.toFixed(2));
            
            <h1 className="product-name">{product.name}</h1>
            <h1 className="product-price">{product.price}</h1>
            {showDescription ? <h1 className = "product-description">{product.description}</h1>: null}
            <div className="media">
                <Link to = "/products/{$productId}" ></Link>
                <img src="{product.image}" alt="picture of {product.name}" />
            </div>
            <button className="add" onClick = {handleAddItemToCart(productId)}>+</button>
            <button className="remove" onClick = {handleRemoveItemFromCart(productId)}>-</button>
            {/* {product.quantity == 0? null: <h1 className="product-quantity">{product.quantity}</h1>} */}
        </div>
    )
}