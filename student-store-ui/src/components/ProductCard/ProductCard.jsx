import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard({ product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription, shoppingCart }) {
    return (
        <div className="product-card card col-lg-3 col-md-4 col-sm-6">
            <div className="media">
                <Link to={`products/` + product.id}><img className="card-img-top img-fluid" src={ product.image } alt={ product.name } /></Link>
            </div>
            <div className="card-body">
            <div className="card-text row mt-3">
                <div className="col-md-5">
                    <p className="product-name">{ product.name }</p>
                    <p className="product-price">${ product.price }</p>
                </div>
                <div className="col-md-4 offset-md-1 p-0">
                    <button className="add" onClick={ () => handleAddItemToCart(product.id) }>+</button>
                    <button className="remove" onClick={ () => handleRemoveItemToCart(product.id) }>-</button>
                </div>
                <div className="col-md-2 mt-2 p-0">
                    <ProductCartCount shoppingCart={ shoppingCart } product={ product } />
                </div>
            </div>
            
            </div>
        </div>
    )
}

export function ProductCartCount({ shoppingCart, product }) {
    let prod = shoppingCart.find((prod) => prod['itemId'] === product.id)
    if (prod) {
        return <span className="cart-count product-quantity">{ prod['quantity'] }</span>
    } else {
        return null
    }
}