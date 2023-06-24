import * as React from "react";
import { useState } from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({ shoppingCart, setShoppingCart }) {
  const [open, setOpen] = useState(false);

  function toggleSidebar() {
    setOpen(!open);
  }

  return (
    <section className="sidebar">
      <div className="wrapper">
        <button className="toggle-button button closed" onClick={toggleSidebar}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        {open ? (
          <ShoppingCart
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
        ) : (
          <div className="shopping-cart closed">
            <div className="cart-icons">
              <span className="cart-icon icon button">
                <i className="material-icons md-48">add_shopping_cart</i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons md-48">monetization_on</i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons md-48">fact_check</i>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
