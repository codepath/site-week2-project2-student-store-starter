import React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({ shoppingCart, subTotal }) {
  return (
    <div className="checkout-form">
      <h3>Payment Info</h3>
      <div className="input-field">
      <label className="label">Name</label>
            <div className="control">
                <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" />
            </div>
        </div>
        <div className="input-field">
            <label className="label">Email</label>
            <div className="control">
                <input name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" />
            </div>
      </div>
      <div className="field">
      <div className="control">
                <label className="checkbox">
                    <input name="termsAndConditions" type="checkbox" />
                    <span className="label">
                        I agree to the 
                        <a href="#terms-and-conditions"> terms and conditions</a>
                    </span>
                </label>
            </div>
      </div>
      <p className="is-danger"></p>
      {shoppingCart.length > 0 && (
        <div className="cart-details">
          <h4>Cart Details:</h4>
          <ul>
            {shoppingCart.map((item) => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity} - Cost:{" "}
                {item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p>Total: {subTotal}</p>
        </div>
      )}
      <div className="field">
        <div className="control">
          <button className="button checkout-button">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
