import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"

//FIXME It should display an h1 element with the className of product-id that contains the text: Product # followed by the productId prop

export default function ProductView(props) {
    return (
      <div className="product-view">
        <h1 className={props.productId}>Product #{props.productId}</h1>
        <ProductCard product={props.product} productId={props.productId} quantity={props.quantity} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart}  showDescription={true} />
      </div>
    )
  }
