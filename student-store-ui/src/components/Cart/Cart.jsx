import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import "./Cart.css";

export default function Cart({ cartItems, products }) {
  let subtotalDisplay = 0
  let taxesDisplay = 0 
  let totalDisplay = 0
  function renderItemsCart(product, quantity) {
    return (
      <>
        {quantity > 0 ? (
          <>
            <div className="product-row">
              <span className="flex-2 cart-product-name">{product.name}</span>
              <span className="center cart-product-quantity">{quantity}</span>
              <span className="center cart-product-price">
                ${product.price}
              </span>
              <span className="center cart-product-subtotal">
                ${product.price * quantity}
              </span>
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    );
    
  }
  return (
    <>
      <div className="CartTable">
        <div className="header">
          <div className="header-row">
            <span className="flex-2">Name</span>
            <span className="center">Quantity</span>
            <span className="center">Unit Price</span>
            <span className="center">Cost</span>
          </div>
          {products?.map((product) =>
            product.id in cartItems ? (
              subtotalDisplay += product.price * cartItems[product.id],
              taxesDisplay = subtotalDisplay * 0.0875,
              totalDisplay = subtotalDisplay + taxesDisplay,
              renderItemsCart(product, cartItems[product.id])
            ) : (
              <></>
            )
          )}
           <div className="receipt">
              <div className="receipt-subtotal">
                <span className="label">Subtotal</span>
                <span></span>
                <span></span>
                <span className="center subtotal">${subtotalDisplay.toFixed(2)}</span>
              </div>
              <div className="receipt-taxes">
                <span className="label">Taxes and Fees</span>
                <span></span>
                <span></span>
                <span className="center">${taxesDisplay.toFixed(2)}</span>
              </div>
              <div className="receipt-total">
                <span className="label">Total</span>
                <span></span>
                <span></span>
                <span className="center total-price">${totalDisplay.toFixed(2)}</span>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
