import * as React from "react"
import CheckoutForm from "./CheckoutForm/CheckoutForm"
import ShoppingCart from "./ShoppingCart/ShoppingCart"
import "./Sidebar.css"

export default function Sidebar({isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle, error}) {
  return (
    <aside className= {isOpen? "sidebar open" : "sidebar"} >
      {isOpen?
      <div className="open">
        <button className="toggle-button" onClick = {() => handleOnToggle()}><img src="../../src/menu.png" alt="menu img" /></button>
        <ShoppingCart shoppingCart={shoppingCart} products = {products} isOpen = {isOpen}/>
        <CheckoutForm shoppingCart={shoppingCart} checkoutForm = {checkoutForm} handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm} 
        isOpen = {isOpen} handleOnCheckoutFormChange ={handleOnCheckoutFormChange} error = {error}/>
      </div>
      :
      <nav className="nav">
        <ul>
          <button className="toggle-button" onClick = {() => handleOnToggle()}><img src="../../src/menu.png" alt="menu img" /></button>
          <li>Shopping Cart</li>
          <li>Payment Info</li>
          <li>Checkout Info</li>
        </ul>
      </nav>}
      
  </aside>
  )
}
