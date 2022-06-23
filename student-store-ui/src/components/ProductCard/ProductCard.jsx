import * as React from "react"
import "./ProductCard.css"

export default function ProductCard({ product }) {
    console.log('product: ', product);
    return (
        <div className="product">
            <img src={ product.image } alt="" />
            <p>{ product.name }</p>
            <p>${ product.price }</p>
        </div>
    )
}