import * as React from "react";

import "./Cart.css";

export default function Cart({ cartItems, products }) {
  //   console.log("items inside Cart component", cartItems);

  function renderItemsCart(product, quantity) {
    return (
      <>
        {quantity > 0 ? (
          <div className="product-row">
            <span className="flex-2 cart-product-name">{product.name}</span>
            <span className="center cart-product-quantity">{quantity}</span>
            <span className="center cart-product-price">${product.price}</span>
            <span className="center cart-product-subtotal">
              ${product.price * quantity}
            </span>
          </div>
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
            (product.id in cartItems && cartItems[product.id] !== 0) ? (
              (
              console.log('cartItems[product.id]',cartItems[product.id]),
              cartItems[product.id] === 0
                ? console.log("my value is 0")
                : renderItemsCart(product, cartItems[product.id]))
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </>
  );
}
