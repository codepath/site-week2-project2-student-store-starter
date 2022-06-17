import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {
  
    console.log(11,props.products);
    return (
        
    <div className = "product-grid">
        <h1>Best Selling Products</h1>
        
     
        {props.products.map((product) => 
            <ProductCard key = {product.id} productId = {product.id} showDescription = {false} name = {product.name} price = {product.price} image = {product.image} product = {product}/>
        )}
        
    </div>

  )
}