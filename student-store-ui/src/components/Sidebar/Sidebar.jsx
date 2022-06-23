import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({isOpen, shoppingCart, products,checkoutForm, handleOnToggle, handleOnCheckoutFormChange}) {
  return (
    <section className="sidebar">
      <p>Sidebar</p>
      <button onClick={handleOnToggle}>HandleOnToggle</button>
    </section>
  )
}
