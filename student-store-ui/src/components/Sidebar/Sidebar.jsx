import * as React from "react";
import "./Sidebar.css";
import arrow from "./arrow.svg";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
  findQuantity,
}) {
  return (
    <section className="sidebar">
      <button className="toggle-button" onClick={handleOnToggle}>
        <img src={arrow} />
      </button>
      <ShoppingCart
        isOpen={isOpen}
        products={products}
        shoppingCart={shoppingCart}
      />
      <CheckoutForm
        isOpen={isOpen}
        shoppingCart={shoppingCart}
        checkoutForm={checkoutForm}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        handleOnCheckoutFormChange={handleOnCheckoutFormChange}
      />
    </section>
  );
}
