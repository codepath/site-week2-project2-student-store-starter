import * as React from "react"
import "./Sidebar.css"
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({ isOpen = false, handleOnToggle, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, setShoppingCart }) {

  const divClass = isOpen ? "sidebar open" : "sidebar closed";


  let closedSideBar =
    <div className="shoppingCart">
      <button onClick={handleOnToggle}><i className="material-icons md-48">arrow_forward</i></button>
      <span className="cart-icon icon button"><i className="material-icons md-48">add_shopping_cart</i></span>
      <span className="cart-icon icon button"><i className="material-icons md-48">monetization_on</i></span>
      <span className="cart-icon icon button"><i className="material-icons md-48">fact_check</i></span>
    </div>


  let openSideBar =

    <>
      <section className="sidebar open">
        <div className="wrapper">
        <button onClick={handleOnToggle}><i className="material-icons md-48">arrow_backward</i></button>
          <ShoppingCart shoppingCart = {shoppingCart}/>
          <CheckoutForm shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart}/>
        </div>
      </section>


    </>


  return (
    <section className="sidebar">

      <div className={divClass}>


        
        <div className="wrapper">
          

          {isOpen ? openSideBar : closedSideBar}






        </div>





      </div>

    </section>
  )
}
