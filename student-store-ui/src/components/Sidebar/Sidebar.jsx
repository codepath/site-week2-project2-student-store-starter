import * as React from "react"
import "./Sidebar.css"
import backButtonIcon from "../assets/back-forward.svg"
import shoppingCartIcon from "../assets/shopping-cart.svg"
import paymentInfoIcon from "../assets/payment-info.svg"
import checkOutIcon from "../assets/checkout.svg"
export default function Sidebar({isOpen = false, shoppingCart = {}, products, checkoutForm, handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm, handleOnToggle}) {
  // const ids = ["open-close-button", "shopping-cart-button", "payment-info-button", "checkout-button"]  
  return (
    <section className="sidebar">
      <button id="open-close-btn" className="side-bar-button">
        <img className="btn-img" src={backButtonIcon}/>
      </button>
      <button id="shopping-cart-btn" className="side-bar-button">
        <img className="btn-img" src={shoppingCartIcon}/>
      </button>
      <button id="paryment-info-btn" className="side-bar-button">
        <img className="btn-img" src={paymentInfoIcon}/>
      </button>
      <button id="checkout-btn" className="side-bar-button">
        <img className="btn-img" src={checkOutIcon}/>
      </button>
    </section>
  )
}
