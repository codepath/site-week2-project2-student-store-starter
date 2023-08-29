import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({
  isOpen,
  shoppingCart,
  products,
  taxesAndFees,
  totalPrice,
  subtotal,
}) {
  if (isOpen) {
    if (shoppingCart.length === 0) {
      return (
        <div className="notification">
          No items added to cart yet. Start shopping now!
        </div>
      );
    } else {
      return (
        <div className="CartTable">
          <div className="header">
            <div className="header-row">
              <span className="flex-2">Name</span>
              <span className="center">Quantity</span>
              <span className="center">Unit Price</span>
              <span className="center">Cost</span>
            </div>
            {shoppingCart.map((item) => (
              <div className="product-row">
                <div>
                  {
                    products.filter((product) => item.itemId === product.id)[0]
                      .name
                  }
                </div>
                <span className="center cart-product-quantity">
                  {item.quantity}
                </span>
                <span className="center cart-product-price">
                  {products
                    .filter((product) => item.itemId === product.id)[0]
                    .price.toLocaleString("us-EN", {
                      style: "currency",
                      currency: "USD",
                    })}
                </span>
                <span className="center cart-product-subtotal">
                  {(
                    products.filter((product) => item.itemId === product.id)[0]
                      .price * item.quantity
                  ).toLocaleString("us-EN", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
            ))}
          </div>

          <div className="receipt">
            <div className="receipt-subtotal">
              <span className="label">Subtotal</span>
              <span></span>
              <span></span>
              <span className="center subtotal">
                {subtotal.toLocaleString("us-EN", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>
            <div className="receipt-taxes">
              <span className="label">Taxes and Fees</span>
              <span></span>
              <span></span>
              <span className="center">{taxesAndFees}</span>
            </div>
            <div className="receipt-total">
              <span className="label">Total</span>
              <span></span>
              <span></span>
              <span className="center total-price">{totalPrice}</span>
            </div>
          </div>
        </div>
      );
    }
  }
}
