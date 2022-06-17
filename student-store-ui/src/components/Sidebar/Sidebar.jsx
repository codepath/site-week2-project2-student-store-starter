import * as React from "react";
import "./Sidebar.css";
import arrow from "../assets/arrow.png";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="wrapper">
        <ul className="sidebar-icons">
          <div className="shopping-cart">
            <span className="toggle-button button closed">
              <i className="material-icons md-48">arrow_forward</i>
            </span>
            <div className="cart-icons">
              <span className="cart-icon add">
                <i className="material-icons md-48">add_shopping_cart</i>
              </span>
              <span className="cart-icon money">
                <i className="material-icons md-48">monetization_on</i>
              </span>
              <span className="cart-icon fact">
                <i className="material-icons md-48">fact_check</i>
              </span>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
}
