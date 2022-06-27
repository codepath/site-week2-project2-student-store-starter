import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard({ product, onAddClickHandler, onSubtractClickHandler, shoppingCart }) {
    return (
        <div className="product card col-lg-3 col-md-4 col-sm-6">
            <Link to={`products/` + product.id}><img className="card-img-top img-fluid" src={ product.image } alt={ product.name } /></Link>
            <div className="card-body">
            <div className="card-text row mt-3">
                <div className="col-md-4">
                    <p>{ product.name }</p>
                    <p>${ product.price }</p>
                </div>
                <div className="col-md-3 offset-md-3 p-0">
                    <button onClick={ () => onAddClickHandler(product.id) }>+</button>
                    <button onClick={ () => onSubtractClickHandler(product.id) }>-</button>
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
    let prod = shoppingCart.find((prod) => prod['id'] === product.id)
    if (prod) {
        return <span className="cart-count">{ prod['count'] }</span>
    } else {
        return null
    }
}