import * as React from "react";
import "./Sidebar.css";
import arrow from "../assets/arrow.png";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({lastReceipt, isOpen, checkoutForm, products, setEmail,  handleOnCheckOutFormChange,  handleOnSubmitCheckoutForm, handleOnToggle, setisOpen,shoppingCart,setshoppingCart}) {
  
    var classNames = `sidebar${!isOpen ? '-active' : ''}`

  return (
    <div className="side-container">
    <section className={classNames}>
      <div className="wrapper">
        <ul className="sidebar-icons">
          <div className="shopping-cart">
            <button className="toggle-button button closed" onClick={() => handleOnToggle(isOpen)}>
              <i className="material-icons md-48">arrow_forward</i>
            </button>
            <div className="cart-icons">
              <button className="cart-icon add" onClick={() => handleOnToggle(isOpen)}>
                <i className="material-icons md-48">add_shopping_cart</i>
              </button>
                <button className="cart-icon money"  onClick={() => handleOnToggle(isOpen)}>
                <i className="material-icons md-48">monetization_on</i>
              </button>
              <button className="cart-icon fact" onClick={() => handleOnToggle(isOpen)}>
                <i className="material-icons md-48">fact_check</i>
              </button>
            </div>
          </div>
        </ul>
      
      
        </div>
        
      </section>
      <ShoppingCart lastReceipt={lastReceipt} checkoutForm={checkoutForm} handleOnCheckOutFormChange={handleOnCheckOutFormChange}  setEmail={setEmail}   handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} products={products} shoppingCart={shoppingCart} setshoppingCart={setshoppingCart} isOpen={isOpen} setisOpen={setisOpen} />

    </div>
  );
}
