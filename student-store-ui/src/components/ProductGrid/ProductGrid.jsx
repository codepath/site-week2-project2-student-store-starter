import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid({ products, onAddClickHandler, onSubtractClickHandler }) {
    return (
        <div className="product-grid" id="buy-now">
            <h1>Product Grid</h1>
            { 
                products.map((product) => <ProductCard product={ product } onAddClickHandler={ onAddClickHandler }
                onSubtractClickHandler={ onSubtractClickHandler } key={`product`+product.id } />)
            }
        </div>
    )
}