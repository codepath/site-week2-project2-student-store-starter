import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {
  

    return (
        
    <div className = "product-grid">
        <h1 className = "grid-header">Best Selling Products</h1>
        
     
        {props.products.map((product) => 
            <ProductCard key = {product.id} productId = {product.id} showDescription = {false} name = {product.name} price = {product.price} image = {product.image} product = {product} handleAddItemToCart = {props.handleAddItemToCart} handleRemoveItemFromCart = {props.handleRemoveItemFromCart} shoppingCart = {props.shoppingCart}/>
        )}
        
    </div>

  )
}