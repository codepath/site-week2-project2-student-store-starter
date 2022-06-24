import "./ProductCard.css"
import * as React from "react"
import { Link } from "react-router-dom";

export default function ProductCard({product, quantity, productId, handleAddItemToCart, handleRemoveItemFromCart, showDescription}) {
    return (
        <div className="product-card">
            <h1 className="product-name">{product.name}</h1>
            <h1 className="product-price">${product.price}</h1>
            {showDescription ? <p className = "product-description">{product.description}</p>: null}
            <div className="media">
                <Link to = {`/products/${productId}`} ><img src={product.image} className = "product-image" alt="picture of {product}" /></Link>
            </div>
            <div className="buttonsAndQuantity">
                <button className="add" onClick = {() => handleAddItemToCart(productId)}>+</button>
                <button className="remove" onClick = {() => handleRemoveItemFromCart(productId)}>-</button>
                {quantity == 0? null: (<h3 className="product-quantity">Quantity: {quantity}</h3>)}
            </div>
        </div>
    )
}