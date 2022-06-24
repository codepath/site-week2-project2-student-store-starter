import * as React from "react"
import "./Sidebar.css"

import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import CheckOutForm from "../CheckoutForm/CheckOutForm"
import CartTable from "../CartTable/CartTable";

export default function Sidebar(props) {
  const [isHidden, setHidden] = React.useState("hidden");

  const toggleisHidden = () => {
    if (isHidden === "unhidden") {
      setHidden("hidden");
    } else {
      setHidden("unhidden");
    }
  }

  const getShoppingCartItems = () => {
    return (
      props.shoppingCart.map((e) => {
        if (e.count > 0) {
          return <ShoppingCartItem key={e.name} item={e} />
        }
      })
    )
  }

  return (
    <section className={"sidebar " + isHidden}>
      <span className="material-icons" onClick={() => { toggleisHidden() }} >shopping_cart</span>
      <div className={"sidebar-header " + isHidden}>
        <p>Shopping Cart</p>
      </div>

      <div className={"sidebar-container " + isHidden}>
        <CheckOutForm 
          isOpen={isHidden} 
          shoppingCart={props.shoppingCart} 
          checkoutForm={props.checkoutForm} 
          handleOnCheckoutFormChange={props.handleOnCheckoutFormChange} 
          handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}/>
        {props.shoppingCart.length >= 1 ? <CartTable getShoppingCartItems={getShoppingCartItems}/> : <h1>hello world</h1>}
        
      </div>
    </section>
  )
}
