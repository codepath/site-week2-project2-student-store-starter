import * as React from "react"
import "./Sidebar.css"

import CheckOutForm from "../CheckoutForm/CheckOutForm"
import CartTable from "../ShoppingCart/ShoppingCart";

export default function Sidebar(props) {
  const [isHidden, setHidden] = React.useState("hidden");

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
        
        
      </div>
    </section>
  )
}
