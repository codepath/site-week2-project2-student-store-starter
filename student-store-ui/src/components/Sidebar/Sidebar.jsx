import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"


export default function Sidebar({isOpen, shoppingCart, products, totalPrice, taxPrice, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle}){
  return (
    <section className={isOpen == true ? "sidebar open" : "sidebar closed"}>
      <button className="toggle-button" onClick={handleOnToggle}>Button</button>
      {isOpen == true ? <><ShoppingCart isOpen={isOpen} shoppingCart={shoppingCart} totalPrice={totalPrice} taxPrice={taxPrice} products={products}/><CheckoutForm /></> : null}
    </section>
  )
}
