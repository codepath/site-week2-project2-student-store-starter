import React from 'react'
import "./ShoppingCart.css"

export default function ShoppingCart({isOpen, subtotalPrice, taxPrice, totalPrice, products, shoppingCart}) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <div className='shopping-cart'>
      {shoppingCart.length > 0 ? <div className="CartTable">
        <div className="header">
          <div className="header-row">
            <span className="flex-2">Name</span>
            <span className="center">Quantity</span>
            <span className="center">Unit Price</span>
            <span className="center">Cost</span>
          </div>
          {shoppingCart.map((item, idx) => {
            return (
            <div className='product-row' key={idx}>
              <span className="flex-2 card-product-name">{products[item.itemId - 1].name}</span>
              <span className="center cart-product-quantity">{item.quantity}</span>
              <span className='center cart-product-price'>{products[item.itemId - 1].price}</span>
              <span className='center cart-product-subtotal'>{products[item.itemId-1].price * item.quantity}</span>
            </div>)
          })}
        </div>
      </div>: <div className='notification'>No items added to cart yet. Start shopping now!</div>}
      {shoppingCart.length > 0 ? <div className="receipt">
        <div className="receipt-subtotal">
          <span className="label">Subtotal</span>
          <span></span>
          <span></span>
          <span className='center subtotal'>{formatter.format(subtotalPrice)}</span>
        </div>
        <div className="receipt-taxes">
          <span className="label">Taxes and Fees</span>
          <span></span>
          <span></span>
          <span className='center subtotal'>{formatter.format(taxPrice)}</span>
        </div>
        <div className="receipt-total">
          <span className="label">Total</span>
          <span></span>
          <span></span>
          <span className='center subtotal'>{formatter.format(totalPrice)}</span>
        </div>
      </div>: null}
    </div>
  )
}