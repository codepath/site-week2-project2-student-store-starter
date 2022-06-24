import * as React from "react"
import "./Sidebar.css"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar({isOpen, shoppingCart, products, checkoutForm, error, successMsg, handleOnToggle, handleCheckoutFormChange, handleOnSubmitCheckoutForm}) {
  return (
    <section className={`sidebar ${isOpen ? "open":"closed"}`}>
        
        <button onClick={handleOnToggle}>Toggle</button>

        <ShoppingCart 
          isOpen={isOpen}/>

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
