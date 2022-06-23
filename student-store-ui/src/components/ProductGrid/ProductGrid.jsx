import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {
  //console.log(props)

    return (
      <div className="grid">
        {!props.products.length ? "No products avilable" : props.products.map((product) => {
            return <ProductCard showDescription={false} product={product} productId={product.id} quantity={props.shoppingCart[product.id] || 0} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} key={product.id}/>
        })}
      </div>
    )
  }