import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {
    console.log(props.shoppingCart)
    return (
        <div id="buy"className="product-grid">
            <div className="content">
                <h2>Best Selling Products</h2>
                <div className="grid">
                    {props.products.map((product) => {
                        let itemIndex = props.shoppingCart.findIndex((obj => obj.itemId === productId))
                        return <ProductCard showDescription={false} product={product} productId={product.id} quantity={itemIndex === -1 ? 0 : props.shoppingCart[itemIndex].quantity} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCard={props.handleRemoveItemFromCard} key={product.id}/>
                    })}
                </div>
            </div>
        </div>
    )
}
