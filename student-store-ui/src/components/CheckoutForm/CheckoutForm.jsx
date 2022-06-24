import React, { useState } from "react";
// import background from "./background.png"

export default function CheckoutForm({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {
  return (
    isOpen && (
      <div className="checkout-form">
        <form>
          <input
            className="checkout-form-input"
            type={checkoutForm.text}
            name={checkoutForm.name}
            placeholder={"Student Name"}
            value={checkoutForm.name}
            onChange={handleCheckoutFormChange}
          />
          <input
            className="checkout-form-input"
            type={checkoutForm.email}
            name={checkoutForm.email}
            placeholder={"student@codepath.org"}
            value={checkoutForm.email}
          />
          <button
            className="checkout-button"
            onClick={() => handleOnSubmitCheckoutForm({})}
          >
            Checkout
          </button>
        </form>
      </div>
    )
  );
}
