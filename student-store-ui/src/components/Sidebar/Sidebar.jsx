import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"


export default function Sidebar({isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle}){
  console.log(isOpen)
  return (
    <section className={isOpen == true ? "sidebar open" : "sidebar closed"}>
      <button className="toggle-button" onClick={handleOnToggle}>Button</button>
      {isOpen == true ? <><ShoppingCart /><CheckoutForm /></> : null}
    </section>
  )
}
