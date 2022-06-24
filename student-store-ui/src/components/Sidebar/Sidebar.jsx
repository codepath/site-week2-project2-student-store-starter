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
  const [isHidden, setHidden] = React.useState("hidden");

  //sidebar open/closed handler for display
  const toggleisHidden = () => {
    if (isHidden === "unhidden") {
      setHidden("hidden");
    } else {
      setHidden("unhidden");
    }
  }

  return (
    <section className={"sidebar " + isHidden}>
      <span className="material-icons" onClick={() => { toggleisHidden() }} >shopping_cart</span>
      <div className={"sidebar-header " + isHidden}>
        <p>Shopping Cart</p>
      </div>

      <div className={"sidebar-container " + isHidden}>
        <CartTable products={props.products} isOpen={isHidden} shoppingCart={props.shoppingCart} />
        <CheckOutForm 
          isOpen={isHidden} 
          shoppingCart={props.shoppingCart} 
          checkoutForm={props.checkoutForm} 
          handleOnCheckoutFormChange={props.handleOnCheckoutFormChange} 
          handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}/>
        
        <Receipt products={props.products} lastReceipt={props.lastReceipt}/>
        
      </div>
    </section>
  )
}
