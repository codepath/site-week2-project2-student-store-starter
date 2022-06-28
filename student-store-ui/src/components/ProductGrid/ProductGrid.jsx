import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid({ products, handleAddItemToCart, handleRemoveItemToCart, shoppingCart }) {
    return (
        <div className="product-grid container" id="buy-now">
            <h2 className="grid-title">Best Selling Products</h2><hr/>
            <div className="row">
            { 
                products.map((product) => <ProductCard product={ product } handleAddItemToCart={ handleAddItemToCart }
                handleRemoveItemToCart={ handleRemoveItemToCart } shoppingCart={ shoppingCart } key={`product`+product.id } />)
            }
            </div>
        </div>
    )
}