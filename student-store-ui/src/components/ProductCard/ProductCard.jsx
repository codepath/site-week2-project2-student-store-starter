import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard({ product, onAddClickHandler, onSubtractClickHandler, shoppingCart }) {
    return (
        <div className="product">
            <Link to={`products/` + product.id}><img src={ product.image } alt={ product.name } /></Link>
            <p>{ product.name }</p>
            <p>${ product.price }</p>
            <button onClick={ () => onAddClickHandler(product.id) }>+</button>
            <button onClick={ () => onSubtractClickHandler(product.id) }>-</button>
            <ProductCartCount shoppingCart={ shoppingCart } product={ product } />
        </div>
    )
}

export function ProductCartCount({ shoppingCart, product }) {
    let prod = shoppingCart.find((prod) => prod['id'] === product.id)
    if (prod) {
        return <span>{ prod['count'] }</span>
    } else {
        return null
    }
}