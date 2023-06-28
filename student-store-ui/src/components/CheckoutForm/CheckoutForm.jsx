import React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({ shoppingCart, subTotal, tax }) {
  const total = subTotal + subTotal * tax;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="checkout-form">
      <p className="is-danger"></p>
      {shoppingCart.length > 0 && (
        <div className="cart-details">
          <h4>Cart Details:</h4>
          <ul>
          {shoppingCart.map((item) => (
  <li key={item.id}>
    {item.name} - Quantity: {item.quantity} - Cost:{" "}
    {formatter.format(item.price * item.quantity)}
  </li>
))}

          </ul>
          <p><strong>Total: {formatter.format(total)}</strong></p>
 {/* Updated to display the total */}
        </div>
      )}
    </div>
  );
}

