import * as React from "react"
import "./ProductGrid.css"
import ProductCard from '../ProductCard/ProductCard'

// import {useEffect, useState} from "react"


// export default function ProductGrid({products, quantity}) {
export default function ProductGrid({products}) {

return (
    <div id="Buy" className = "product-grid">
        <div className="content">
        
          <h3>Our Products</h3>

          <div className="grid">
        
            {products?.map((product, index) => {
            
            return <ProductCard product={product} index ={index} />})}

          </div>
        </div>
    </div>
)}