import * as React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

import "./Sidebar.css";


export default function Sidebar(props) {
  //console.log("test", props.receipt)
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
        {props.isOpen ? <div> <ShoppingCart shoppingCart={props.shoppingCart} products={props.products} handleCheckoutFormChange={props.handleCheckoutFormChange}/> 
          <CheckoutForm
              isOpen={props.isOpen}
              shoppingCart={props.shoppingCart}
              products={props.products}
              checkoutForm={props.checkoutForm}
              handleOnSubmit={props.handleOnSubmit}
              handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
              handleCheckoutFormChange={props.handleCheckoutFormChange}
              success={props.success}
              receipt={props.receipt}
              setSuccess={props.setSuccess}
              handleOnToggle={props.handleOnToggle}
              orderSent={props.orderSent} 
              setOrderSent={props.setOrderSent}
          /> </div> : 
          null}
      </div>
    </section>
  );
}

