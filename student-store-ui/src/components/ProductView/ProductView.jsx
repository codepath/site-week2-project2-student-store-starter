import * as React from "react"
import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView(props) {
    const product = props.product
    return (
        <div className="product-view">
            <h1 className="product-id">Product #{product.id}</h1>
            <ProductCard showDescription={true} product={product} productId={product.id} quantity={props.shoppingCart[product.id] || 0} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} key={product.id}/>
        </div>
    )
}