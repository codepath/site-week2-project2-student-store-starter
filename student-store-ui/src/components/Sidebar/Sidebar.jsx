import * as React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="wrapper">
        <button class="toggle-button button closed">
          <i class="material-icons md-48">arrow_forward</i>
        </button>
        <div class="shopping-cart">
          <div class="cart-icons">
            <span class="cart-icon icon button">
              <i class="material-icons md-48">add_shopping_cart</i>
            </span>
            <span class="cart-icon icon button">
              <i class="material-icons md-48">monetization_on</i>
            </span>
            <span class="cart-icon icon button">
              <i class="material-icons md-48">fact_check</i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
