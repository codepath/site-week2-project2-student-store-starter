import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({products, shoppingCart, setShoppingCart, handleAddQuantity, handleSubstractQuantity, getQuantity}) {
    
  return (
    <div className="product-grid">
     {products?.map((product) =>  <ProductCard product= {product} shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart} handleAddQuantity = {handleAddQuantity} handleSubstractQuantity = {handleSubstractQuantity} getQuantity = {getQuantity}/>)}
    </div>
  )
}

