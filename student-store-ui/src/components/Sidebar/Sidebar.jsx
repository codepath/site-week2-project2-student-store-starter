import * as React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

import "./Sidebar.css";

export default function Sidebar(props) {
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

        <button className={props.isOpen ? "toggle-button open" : "toggle-button button"} onClick={props.handleOnToggle}>
          <i className="material-icons">add_shopping_cart</i>
        </button>
        <ShoppingCart shoppingCart={props.shoppingCart} products={props.products} />
      </div>
    </section>
  );
}

