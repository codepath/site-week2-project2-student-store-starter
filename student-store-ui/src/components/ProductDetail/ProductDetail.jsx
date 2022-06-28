import * as React from "react"
import { useParams } from "react-router-dom"
import "./ProductDetail.css"

export default function ProductDetail({ allProducts, handleAddItemToCart, handleRemoveItemToCart }) {
    const { productId } = useParams();
    const product = allProducts.find((product) => product.id === parseInt(productId))

    return (
        <div className="product-detail container">
            <div className="card">
                <h1 className="product-title">Product #{ productId }</h1>
                <img src={ product.image } alt={ product.name } />
                <div className="card-body">
                    <strong>{ product.name }</strong><br/>
                    <strong>${ product.price }</strong>
                    <p>{ product.description }</p>
                </div>
            </div>
        </div>
    )
}