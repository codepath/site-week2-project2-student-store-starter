import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({isOpen, shoppingcart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle}) {
  var sidebarClassName = isOpen ? "sidebar sidebar-open" : "sidebar sidebar-closed"
  var buttonText = !isOpen? "Open Sidebar" : "Close Sidebar"
  return (
    <section className={sidebarClassName}>
      <button className="button is-dark is-outlined toggle-button" onClick={handleOnToggle}>{buttonText}</button>
      {isOpen ? <div> <ShoppingCart /> <CheckoutForm/> </div> : null}

    </section>
  )
}

function ShoppingCart(){


  return (

    <div className="shopping-cart">
      <p>Shopping Cart!</p>
    </div>
  )
}

function CheckoutForm(){

  return(

    <div className="checkout-form">
      <p>Checkout Form</p>
    </div>
  )
}