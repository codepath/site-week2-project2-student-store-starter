import * as React from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Sidebar.css"

export default function Sidebar({ isOpen, shoppingCart, products,
  checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle, error, success }) {
  const menuCollapse = isOpen ? "open" : "closed";
  return (
    <div className={`sidebar ${menuCollapse}`}>
      <div className="wrapper">
        <button className={`toggle-button button ${menuCollapse}`} onClick={handleOnToggle}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
      </div>

      <ShoppingCart
        isOpen={isOpen}
        products={products}
        shoppingCart={shoppingCart} />

      <CheckoutForm
        isOpen={isOpen}
        handleOnCheckoutFormChange={handleOnCheckoutFormChange}
        checkoutForm={checkoutForm}
        handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
        error={error}
        success={success}
      />


    </div>
  )
}
