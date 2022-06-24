import * as React from "react"
import ShoppingCart from "./ShoppingCart/ShoppingCart"
import "./Sidebar.css"

export default function Sidebar({isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle}) {
  return (
    // <section className="sidebar">
    //   {/* change to imgs later */}

      
    // </section>
    <aside className= {isOpen? "sidebar open" : "sidebar"} >
      {isOpen?
      <div className="open">
        <button className="toggle-button" onClick = {() => handleOnToggle()}><img src="../../src/menu.png" alt="menu img" /></button>
        <ShoppingCart shoppingCart={shoppingCart} products = {products} isOpen = {isOpen}/>
      </div>
      :
      <nav className="nav">
        <ul>
          <button className="toggle-button" onClick = {() => handleOnToggle()}><img src="../../src/menu.png" alt="menu img" /></button>
          <li><a href="" className="sideBarLink">Shopping Cart</a></li>
          <li><a href="" className="sideBarLink">Payment Info</a></li>
          <li><a href="" className="sideBarLink">Checkout Info</a></li>
        </ul>
      </nav>}
      
  </aside>
  )
}
