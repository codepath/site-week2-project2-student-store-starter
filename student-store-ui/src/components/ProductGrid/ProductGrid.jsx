import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid({ products }) {
    console.log('products: ', products);
    return (
        <div className="product-grid">
            <h1>Product Grid</h1>
            { 
                products.map((product) => <ProductCard product={ product } key={`product`+product.id } />)
            }
        </div>
    )
}