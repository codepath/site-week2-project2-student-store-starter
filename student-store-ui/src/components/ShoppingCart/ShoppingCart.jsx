import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({
  shoppingCart,
  products,
  handleSidebarToggle,
}) {
  let subtotal = 0;
  shoppingCart.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    if (product) {
      subtotal += product.price * item.quantity;
    }
  });

  const tax = subtotal * 0.0875;
  const total = subtotal + tax;

  return (
    <div className="open">
      <h3>
        Shopping Cart
        <span className="button" onClick={handleSidebarToggle}>
          <i className="material-icons md-48">add_shopping_cart</i>
        </span>
      </h3>

      {shoppingCart.length > 0 ? (
        <div>
          <div className="CartTable">
            <div className="header">
              <div className="header-row">
                <span className="flex-2">Name</span>
                <span className="center">Quantity</span>
                <span className="center">Unit Price</span>
                <span className="center">Cost</span>
              </div>
              {shoppingCart.map((item) => {
                const product = products.find((p) => p.id === item.productId);
                return product ? (
                  <div className="product-row" key={product.id}>
                    <span className="flex-2 cart-product-name">
                      {product.name}
                    </span>
                    <span className="center cart-product-quantity">
                      {item.quantity}
                    </span>
                    <span className="center cart-product-price">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="center cart-product-subtotal">
                      ${(product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ) : null;
              })}
            </div>
            <div className="receipt">
              <div className="receipt-subtotal">
                <span className="label">Subtotal</span>
                <span className="center subtotal">${subtotal.toFixed(2)}</span>
              </div>
              <div className="receipt-taxes">
                <span className="label">Taxes and Fees</span>
                <span className="center">${tax.toFixed(2)}</span>
              </div>
              <div className="receipt-total">
                <span className="label">Total</span>
                <span className="center total-price">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="notification">
          No items added to cart yet. Start shopping now!
        </div>
      )}
    </div>
  );
}