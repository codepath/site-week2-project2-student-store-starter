import * as React from "react"
import "./ShoppingCart.css"
import { useState } from "react";

export default function ShoppingCart({cartItems, setCartItems, allItemSubtotal}) {
    // console.log(cartItems)
    {cartItems?.map((item) => (allItemSubtotal += item.subtotal))}
    const allItemTaxes = allItemSubtotal * .0725

return (
<div className="CartTable">
  <div className="header">
    <div className="header-row">
      <span className="flex-2">Name</span>
      <span className="center">Quantity</span>
      <span className="center">Unit Price</span>
      <span className="center">Cost</span>
    </div>
    {cartItems?.map((item) => (
          <div className="product-row" key={item.id}>
            <span className="flex-2 cart-product-name">{item.name}</span>
            <span className="center cart-product-quantity">{item.quantity}</span>
            <span className="center cart-product-price">{item.price}</span>
            <span className="center cart-product-subtotal">
              ${item.subtotal.toFixed(2)}
            </span>
          </div>
        ))}
  </div>
  <div className="receipt">
    <div className="receipt-subtotal">
      <span className="label">Subtotal</span>
      <span className="center subtotal">${allItemSubtotal.toFixed(2)}</span>
    </div>
    <div className="receipt-taxes">
      <span className="label">Taxes and Fees</span>
      <span></span>
      <span></span>
      <span className="center">${allItemTaxes.toFixed(2)}</span>
    </div>
    <div className="receipt-total">
      <span className="label">Total</span>
      <span></span>
      <span></span>
      <span className="center total-price">${(allItemSubtotal + allItemTaxes).toFixed(2)}</span>
    </div>
  </div>
</div>
)
}