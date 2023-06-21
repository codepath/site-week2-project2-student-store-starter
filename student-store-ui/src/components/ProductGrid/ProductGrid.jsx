import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"
import { useState } from "react"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart, shoppingCart, setShoppingCart}) {
    
  // const [quantity, setQuantity] = useState(0)
    
    
    
    return (
    <div className="product-grid">
     {products?.map((product) =>  <ProductCard product= {product} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart} shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart}/>)}
    </div>
  )
}

// quantity = {quantity} setQuantity={setQuantity}