import * as React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

import "./Sidebar.css";


export default function Sidebar(props) {
  console.log("test", props.handleOnSubmitCheckoutForm)
  return (
    <section className={props.isOpen ? "sidebar open" : "sidebar closed"}>
      <div className="wrapper">
        <button
          className={
            props.isOpen ? "toggle-button open" : "toggle-button button"
          }
          onClick={props.handleOnToggle}
        >
          <i className="material-icons md-48">arrow_forward</i>
        </button>

        <button className="toggle" onClick={props.handleOnToggle}>
          
          <i className="material-icons">add_shopping_cart</i>
        </button>
        {props.isOpen ? <div> <ShoppingCart shoppingCart={props.shoppingCart} products={props.products} handleCheckoutFormChange={props.handleCheckoutFormChange}/> <CheckoutForm isOpen={props.isOpen} shoppingCart={props.shoppingCart} checkoutForm={props.checkoutForm} handleCheckoutFormChange={props.handleCheckoutFormChange} handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm} reciept={props.reciept}/> </div> : null}
      </div>
    </section>
  );
}

