import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {
    return (
        <div id="buy"className="product-grid">
            <div className="content">
                <h2>Best Selling Products</h2>
                <div className="grid">
                    {!props.products.length ? "No products avilable" : props.products.map((product) => {
                        return <ProductCard showDescription={false} product={product} productId={product.id} quantity={props.shoppingCart[product.id] || 0} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} key={product.id}/>
                    })}
                </div>
            </div>
        </div>
    )
}
