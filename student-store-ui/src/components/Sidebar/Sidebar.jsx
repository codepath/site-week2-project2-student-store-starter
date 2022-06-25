/**
 * Sidebar.jsx is in charge of displaying a left bar that opens/closes by a trigger button,
 * displaying the current shopping cart items, checkout information, and receipt from purchases
 * made by the user
 */

import * as React from "react"
import "./Sidebar.css"

import CheckOutForm from "../CheckoutForm/CheckOutForm"
import CartTable from "../ShoppingCart/ShoppingCart";
import Receipt from "../Receipt/Receipt";

export default function Sidebar(props) {

  return (
    <section className={"sidebar " + props.isOpen}>
      <span className="material-icons" onClick={() => { props.handleOnToggle() }} >shopping_cart</span>
      <div className={"sidebar-header " + props.isOpen}>
        <p>Shopping Cart</p>
      </div>

      <div className={"sidebar-container " + props.isOpen}>
        <CartTable products={props.products} isOpen={props.isOpen} shoppingCart={props.shoppingCart} />
        <CheckOutForm 
          isOpen={props.isOpen} 
          shoppingCart={props.shoppingCart} 
          checkoutForm={props.checkoutForm} 
          handleOnCheckoutFormChange={props.handleOnCheckoutFormChange} 
          handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
          lastReceipt={props.lastReceipt}
          success={props.success}/>
        
        <Receipt success={props.success} products={props.products} lastReceipt={props.lastReceipt}/>
        
      </div>
    </section>
  )
}
