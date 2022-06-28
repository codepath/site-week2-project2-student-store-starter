import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard({ product, handleAddItemToCart, handleRemoveItemToCart, shoppingCart }) {
    return (
        <div className="product card col-lg-3 col-md-4 col-sm-6">
            <Link to={`products/` + product.id}><img className="card-img-top img-fluid" src={ product.image } alt={ product.name } /></Link>
            <div className="card-body">
            <div className="card-text row mt-3">
                <div className="col-md-5">
                    <p>{ product.name }</p>
                    <p>${ product.price }</p>
                </div>
                <div className="col-md-4 offset-md-1 p-0">
                    <button onClick={ () => handleAddItemToCart(product.id) }>+</button>
                    <button onClick={ () => handleRemoveItemToCart(product.id) }>-</button>
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
        return <span className="cart-count">{ prod['quantity'] }</span>
    } else {
        return null
    }
}