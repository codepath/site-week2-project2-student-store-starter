import * as React from "react"
import "./Home.css"
import ProductCard from "./ProductCard"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart}) {
  function findQuantity(product){
    let quantity = 0
        for(let productInCart of shoppingCart){
          if(productInCart.productId === product.id){
            quantity = productInCart.quantity 
            break
          }
        }
    return quantity
    
  }
  return (
    <div className="product-grid">
      {products.map((product) => {
        let quantity = findQuantity(product)

        {/* let productInCart = shoppingCart.findIndex(
          
          cartProduct => {cartProduct.productId === product.id
          }
        )
        let quantity = productInCart === undefined ? 0 : productInCart.quantity
         */}
        
        return(
        <ProductCard 
        product={product}
        key = {product.id}
        productId = {product.id}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        showDescription = {false}
        quantity = {quantity}
        />
        )})}
        
        
    </div>

  )
}
