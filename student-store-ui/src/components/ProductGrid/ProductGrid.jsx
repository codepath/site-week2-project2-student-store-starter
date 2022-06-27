import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid({ products, onAddClickHandler, onSubtractClickHandler, shoppingCart }) {
    return (
        <div className="product-grid container" id="buy-now">
            <h1>Best Selling Products</h1>
            <div className="row">
            { 
                products.map((product) => <ProductCard product={ product } onAddClickHandler={ onAddClickHandler }
                onSubtractClickHandler={ onSubtractClickHandler } shoppingCart={ shoppingCart } key={`product`+product.id } />)
            }
            </div>
        </div>
    )
}