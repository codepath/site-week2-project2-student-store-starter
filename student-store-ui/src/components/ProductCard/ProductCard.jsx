import * as React from "react"
import "./ProductCard.css"

export default function ProductCard({ product }) {
    return (
        <div className="product">
            <img src={ product.image } alt="" />
            <p>{ product.name }</p>
            <p>${ product.price }</p>
        </div>
    )
}