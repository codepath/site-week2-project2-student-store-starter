import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState("sidebar closed");

    const handleSideBarOpen = () => {
      setIsOpen(isOpen === "sidebar closed" ? "sidebar open" : "sidebar closed");
    }

    console.log("isOpen: " + isOpen)

  return (
    <section className={isOpen}>
      <div className="wrapper">
        <button className="toggle-button button closed" onClick={() => handleSideBarOpen()}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <div className="shopping-cart">
          <div className="cart-icons"> 
            <span className="cart-icon icon button" onClick={() => handleSideBarOpen()}>
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>   
            
            <span className="cart-icon icon button" onClick={() => handleSideBarOpen()}>
              <i className="material-icons md-48">monetization_on</i>
            </span>
            <span className="cart-icon icon button"onClick={() => handleSideBarOpen()}>
              <i className="material-icons md-48">fact_check</i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
