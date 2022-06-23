/* eslint-disable react/prop-types */
import * as React from 'react';
import './Sidebar.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

export default function Sidebar({
  isOpen, products, shoppingCart, handleOnToggle, checkoutForm,
  handleOnCheckoutFormChange, handleOnSubmitCheckoutForm,
}) {
  if (!isOpen) {
    return (
      null
    );
  }
  return (
    <section className="sidebar">
      <ShoppingCart
        isOpen={isOpen}
        products={products}
        shoppingCart={shoppingCart}
      />
      <CheckoutForm
        isOpen={isOpen}
        shoppingCart={shoppingCart}
        checkoutForm={checkoutForm}
        handleOnToggle={handleOnToggle}
        handleOnCheckoutFormChange={handleOnCheckoutFormChange}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
      />
    </section>
  );
}
