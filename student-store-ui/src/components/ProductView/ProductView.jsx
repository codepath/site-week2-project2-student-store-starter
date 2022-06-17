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
          // would need to get info from shopping cart, not defined yet
          quantity={props.quantity}
          handleAddItemToCart={props.handleAddItemToCart}
          handleRemoveItemFromCart={props.handleRemoveItemFromCart}
          showDescription={true}
        />
      </div>
    )
}