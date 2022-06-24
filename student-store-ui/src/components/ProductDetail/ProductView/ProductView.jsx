import "./ProductView.css"
import * as React from "react"
import ProductCard from "../../Home/ProductsGrid/ProductCard/ProductCard"

export default function ProductView({product, productId, handleAddItemToCart, handleRemoveItemFromCart, quantity}) {
    
    return (
        <div className="product-view">
            <h1 className="product-id">Product # {productId}</h1>
            <ProductCard product = {product} productId = {productId} handleAddItemToCart = {handleAddItemToCart} 
            handleRemoveItemFromCart = {handleRemoveItemFromCart} quantity = {quantity} showDescription = {true}/>
        </div>
    )
}