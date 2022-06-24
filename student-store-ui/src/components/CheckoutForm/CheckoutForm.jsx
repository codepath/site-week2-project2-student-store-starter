/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import './CheckoutForm.css';

export default function CheckoutForm({
  isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm, error, purchaseCompleted,
}) {
  // if purchase was recently completed
  if (purchaseCompleted) {
    return <p className="checkout-complete">Congrats, mf. You bought some stupid shit.</p>;
  }

  // return no CheckoutForm if empty shopping cart or sidebar is closed
  if (shoppingCart.length === 0 || !isOpen) return null;

  // Checkout issue messages for uncompleted checkout form
  let checkoutIssue = '';
  if (error === 'empty email') {
    checkoutIssue = (<p className="checkout-fail">Please enter your email.</p>);
  } else if (error === 'empty name') {
    checkoutIssue = (<p className="checkout-fail">Please enter your name.</p>);
  }
  return (
    <div className="checkout-form">
      <h3 className="form-title">Checkout Form</h3>
      <form>
        <label>
          Email:
          <input
            className="checkout-form-input"
            type="email"
            name="email"
            placeholder="student@codepath.org"
            onChange={(e) => handleOnCheckoutFormChange('email', e.target.value)}
            value={checkoutForm.email}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            className="checkout-form-input"
            type="text"
            name="name"
            placeholder="Student Name"
            onChange={(e) => handleOnCheckoutFormChange('name', e.target.value)}
            value={checkoutForm.name}
          />
        </label>
        <br />
        <button
          type="button"
          className="checkout-button"
          onClick={handleOnSubmitCheckoutForm}
        >
          Checkout
        </button>
        {checkoutIssue}
      </form>
    </div>
  );
}
