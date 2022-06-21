import React from 'react'
import "./ShoppingCart.css"

export default function ShoppingCart({isOpen, products, shoppingCart}){
  console.log(`products: ${products}`)
  return (
    <div className='shopping-cart'>
      {shoppingCart.length > 0 ? shoppingCart.map((item, idx) => (
        <div className="content" key={idx}>
          <p className="card-product-name">product name: {item.itemId}</p>
          <p className="cart-product-quantity">product quantity: {item.quantity}</p>
        </div>
      )) : <p className='notification'>No items added to cart yet. Start shopping now!</p>}
    </div>
  )
}
