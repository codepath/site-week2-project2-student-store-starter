import * as React from "react"
import "./ProductGrid.css"
import ProductCard from '../ProductCard/ProductCard'

// import {useEffect, useState} from "react"


// export default function ProductGrid({products, quantity}) {
export default function ProductGrid({shoppingCart, products, handleAddItemToCart, handleRemoveItemToCart}) {


if (!products){
  return (<div className = "not-found" > PRODUCT NOT FOUND, SORRY!</div>)
  // TODO: FIX BUG
} else {

return (
    <div id="Buy" className = "product-grid">
        <div className="content">
        
          <h3>Our Products</h3>

          <div className="grid">
            {products?.map((product, index) => {
            
            return <ProductCard key={index} product={product} index={index} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} shoppingCart={shoppingCart}/>})}

          </div>
        </div>
    </div>
)}}