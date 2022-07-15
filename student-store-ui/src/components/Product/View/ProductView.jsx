import "./ProductView.css"
import * as React from "react"
import ProductCard from "../Card/ProductCard"


export default function ProductView(props) {
    return (
        <div className = "product-view">
            <h1 className = "product-id"> Product #{props.productId} </h1>
            <ProductCard
                showDescription = {true}
                product = {product}
                productId = {product.id}
                quantity = {props.shoppingCart.quantity}
                handleAddItemToCart = {props.handleAddItemToCart}
                handleRemoveItemFromCart = {props.handleRemoveItemFromCart}
            />
        </div>
    )
}