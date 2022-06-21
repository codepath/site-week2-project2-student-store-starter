import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export default function Sidebar({isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle}){
  console.log(isOpen)
  return (
    <section className={isOpen == true ? "sidebar open" : "sidebar closed"}>
      <button className="toggle-button" onClick={handleOnToggle}>Button</button>
      {isOpen == true ? <><ShoppingCart /></> : null}
    </section>
  )
}
