import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductView.css"

export default function ProductView(props) {
  console.log(props.product)

  return (
      <div className="product-view">
        <h1 className="product-id">Product #{props.productId}</h1>
        <ProductCard
          product={props.product}
          productId={props.product.id}
          quantity={props.quantity}
          shoppingCart = {props.shoppingCart}
          handleAddItemToCart={props.handleAddItemToCart}
          handleRemoveItemFromCart={props.handleRemoveItemFromCart}
          showDescription={true}
        />
      </div>
    )
}