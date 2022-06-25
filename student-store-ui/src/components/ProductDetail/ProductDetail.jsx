import * as React from "react"
import { useParams } from "react-router-dom"
import "./ProductDetail.css"

export default function ProductDetail({ allProducts }) {
    const { productId } = useParams();
    const product = allProducts.find((product) => product.id === parseInt(productId))

    return (
        <div className="product-detail">
            <h1>Product #{ productId }</h1>
            <img src={ product.image } alt={ product.name } />
            <p>{ product.name }</p>
            <p>${ product.price }</p>
            <p>{ product.description }</p>
        </div>
    )
}