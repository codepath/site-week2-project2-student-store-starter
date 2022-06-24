/* eslint-disable react/prop-types */
import * as React from 'react';
import './Sidebar.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

export default function Sidebar({
  isOpen, products, shoppingCart, handleOnToggle, checkoutForm, error,
  purchaseCompleted, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm,
}) {
  // collapsed
  if (!isOpen) {
    return (
      <section className="sidebar closed">
        <button className="expander button" onClick={handleOnToggle} type="button">
          <img
            className="expander image"
            src="https://i.imgur.com/dNtDksO.png"
            alt="sidebar expand"
          />
        </button>
      </section>
    );
  }
  // expanded
  return (
    <section className="sidebar open">
      <button className="collapser button" onClick={handleOnToggle} type="button">
        <img
          className="collapser image"
          src="https://i.imgur.com/dNtDksO.png"
          alt="sidebar collapse"
        />
      </button>
      <br />
      <br />
      <ShoppingCart
        isOpen={isOpen}
        products={products}
        shoppingCart={shoppingCart}
        purchaseCompleted={purchaseCompleted}
      />
      <CheckoutForm
        isOpen={isOpen}
        shoppingCart={shoppingCart}
        checkoutForm={checkoutForm}
        error={error}
        purchaseCompleted={purchaseCompleted}
        handleOnToggle={handleOnToggle}
        handleOnCheckoutFormChange={handleOnCheckoutFormChange}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
      />
    </section>
  );
}
