import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {
  
  // if there is a chosen category, render the appropriate products else render all
  let productsToRender = props.activeCategory ? props.products.filter(product => product.category == props.activeCategory) : props.products
  
  if (props.searchQuery) {
    productsToRender = productsToRender.filter(product => product.name.toLowerCase().includes(props.searchQuery))
  }

  if (productsToRender.length === 0) {
    return (
      <div className="product-grid">
        <p className="notification">No products available</p>
      </div>
    )
  }

  return (
    <div className="product-grid">
    {productsToRender.map(product => {
      let productQuantity = 0
      const  targetProduct = props.shoppingCart.find((productObj) => productObj.itemId == product.id)
      if (targetProduct) {
        productQuantity = targetProduct.quantity
      }
      return (
      <ProductCard
        key={product.id}
        product={product}
        productId={product.id}
        quantity={productQuantity}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}
        showDescription={false}/> )
    }
    )}
    </div>
  )
}