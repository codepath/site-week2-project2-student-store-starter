import * as React from "react"
import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView(props) {
    const product = props.product
    //console.log(props)
    //console.log(props)
    return (
        <div className="product-view">
            <h1 className="product-id">Product #{props.product.id}</h1>
            <ProductCard showDescription={true} product={props.product} productId={props.product.id} quantity={props.shoppingCart[props.product.id] || 0} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} key={props.product.id}/>
        </div>
    )
}