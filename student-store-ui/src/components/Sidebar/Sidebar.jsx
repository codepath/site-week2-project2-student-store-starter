import * as React from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import "./Sidebar.css"

//export default function Sidebar( {isOpen=false, shoppingCart=[], products=[], checkoutForm=null, handleOnCheckoutFormChange=() => {}, handleOnCheckoutFormChange=() => {}, handleOnToggle=() => {} }) {
export default function Sidebar(props) {

  // if isOpen is false, add "hidden" class property
  const sidebarClassName = props.isOpen ? "sidebar" : "sidebar hidden"

  return (
    <section className={sidebarClassName}>
      <button className="toggle-button" onClick={props.handleOnToggle}>Toggle</button>
      <div className="sidebar-contents">
        <h3>Shopping Cart</h3>
        <ShoppingCart
          isOpen={props.isOpen}
          products={props.products}
          shoppingCart={props.shoppingCart}/>
        <h3>Checkout</h3>
        <CheckoutForm
          isOpen={props.isOpen}
          shoppingCart={props.shoppingCart}
          checkoutForm={props.checkoutForm}
          handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
          checkoutMessage={props.checkoutMessage}
          purchaseOrder={props.purchaseOrder}
          setPurchaseOrder={props.setPurchaseOrder}/>
      </div>
    </section>
  )
}
