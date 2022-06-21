import React from 'react'
import "./ShoppingCart.css"
import { useState } from 'react'

export default function ShoppingCart({isOpen, totalPrice, taxPrice, products, shoppingCart}){
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })


  return (
    <div className='shopping-cart'>
      {shoppingCart.length > 0 ? shoppingCart.map((item, idx) => 
        {
          return (
          <div className="content" key={idx}>
          <p className="card-product-name">{products[item.itemId - 1].name}</p>
          <p className="cart-product-quantity">product quantity: {item.quantity}</p>
          </div>)
        }
      ) : <p className='notification'>No items added to cart yet. Start shopping now!</p>}
      {<p className='subtotal'>Subtotal: {formatter.format(totalPrice)}</p>}
      {<p className='total-price'>Total Price: {formatter.format(taxPrice)}</p>}
    </div>
  )
}
