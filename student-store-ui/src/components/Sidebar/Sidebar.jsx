import * as React from "react";
import { useState, useEffect, useContext } from "react";
import "./Sidebar.css";
import CheckoutCartForm from "../CheckoutCartForm/CheckoutCartForm";
import CartItemsTable from "../CartItemsTable/CartItemsTable.jsx";
export default function Sidebar({checkoutCart, dispatch}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className={"sidebar-container " + (isOpen ? "open" : "")}>
        <button onClick={() => setIsOpen((open) => !open)} className={"sidebar-toggle-button " + (isOpen ? "open" : "")}>
          <i className="material-symbols-outlined">{isOpen ? "arrow_back_ios" : "shopping_cart"}</i>
        </button>
      
      {isOpen && (
        <>
          <CartItemsTable checkoutCart={checkoutCart}/>
          <CheckoutCartForm checkoutCart={checkoutCart} dispatch={dispatch}/>
        </>
      )}
    </section>
  )
}
