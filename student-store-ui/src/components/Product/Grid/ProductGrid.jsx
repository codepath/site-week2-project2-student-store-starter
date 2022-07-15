import "./ProductGrid.css"
import * as React from "react"
import ProductCard from "../Card/ProductCard"


export default function ProductGrid(props) {
    const {products} = props
    

    return (
        <div className="product-grid">
            {products.map((product, index) => (
                <ProductCard
                    key = {index}
                    showDescription = {false}
                    product = {product}
                    productId = {product.id}
                    quantity = {props.shoppingCart.quantity}
                    handleAddItemToCart = {props.handleAddItemToCart}
                    handleRemoveItemFromCart = {props.handleRemoveItemFromCart}
                />
        ))}
        </div>
  )
}