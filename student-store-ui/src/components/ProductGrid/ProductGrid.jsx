import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {
  
  // if there is a chosen category, render the appropriate products else render all
  let productsToRender = props.activeCategory ? props.products.filter(product => product.category == props.activeCategory) : props.products

  return (
    <div className="product-grid">
    {productsToRender.map(product =>
      <ProductCard
        key={product.id}
        product={product}
        productId={product.id}
        // would need to get info from shopping cart, not defined yet
        quantity={0}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        showDescription={false}/>
    )}
    </div>
  )
}