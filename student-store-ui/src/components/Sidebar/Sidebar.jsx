import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle}) {
  return (
    <section className="sidebar">
      <p>Sidebar</p>
      <button className="toggle-button"></button>
    </section>
  )
}
