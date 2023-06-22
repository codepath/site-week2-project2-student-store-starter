import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"
import { useState } from "react"

export default function ProductGrid({products, shoppingCart, setShoppingCart, handleAddQuantity, handleSubstractQuantity, getQuantity}) {
    
  // const [quantity, setQuantity] = useState(0)
    
    
    
    return (
    <div className="product-grid">
     {products?.map((product) =>  <ProductCard product= {product} shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart} handleAddQuantity = {handleAddQuantity} handleSubstractQuantity = {handleSubstractQuantity} getQuantity = {getQuantity}/>)}
    </div>
  )
}

// quantity = {quantity} setQuantity={setQuantity}