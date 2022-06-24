import * as React from "react"
import "./Sidebar.css"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({isOpen, shoppingCart, products, checkoutForm, error, successMsg, handleOnToggle, handleCheckoutFormChange, handleOnSubmitCheckoutForm}) {
  return (
    <section className="sidebar">
        
        <button onClick={handleOnToggle}>Toggle</button>

        <CheckoutForm
                isOpen={isOpen}
                shoppingCart={shoppingCart}
                checkoutForm={checkoutForm}
                handleCheckoutFormChange={handleCheckoutFormChange}
                handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                error={error}
                successMsg={successMsg}
              />
    </section>
  )
}
