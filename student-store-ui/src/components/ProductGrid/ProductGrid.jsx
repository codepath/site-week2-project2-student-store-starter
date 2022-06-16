import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {
    return (
        <div className="product-grid">
            {props.products.map((product) => {
                let itemIndex = props.shoppingCart.findIndex((obj => obj.itemId === productId))

                return <ProductCard showDescription={false} product={product} productId={product.id} quantity={props.shoppingCart[itemIndex].quantity} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCard={props.handleRemoveItemFromCard}/>
                })}
        </div>
    )
}
