import * as React from "react";
import "./Sidebar.css";
import backButtonIcon from "../assets/back-forward.svg";
import shoppingCartIcon from "../assets/shopping-cart.svg";
import paymentInfoIcon from "../assets/payment-info.svg";
import checkOutIcon from "../assets/checkout.svg";
import CartTable from "../CartTable/CartTable";
import Checkout from "../Checkout/Checkout";
import { useState } from "react";
export default function Sidebar({
  shoppingCart,
  products,
  setShoppingCart
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnToggle = (event) => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (event) => {
    setIsOpen(true);
  };

  return (
    <section className={isOpen ? "open-sidebar" : "sidebar"}>
      <button
        id={isOpen ? "close" : "open"}
        className="side-bar-button toggle-button"
        onClick={handleOnToggle}
      >
        <img className="btn-img" src={backButtonIcon} />
      </button>
      <button id="shopping-cart-btn" className="side-bar-button" onClick={handleMenuClick}>
        <img className="btn-img" src={shoppingCartIcon} />
      </button>
      {shoppingCart.length ? (
        <CartTable
          products={products}
          shoppingCart={shoppingCart}
          style={{ display: isOpen ? "" : "none" }}
          setShoppingCart={setShoppingCart}
        />
      ) : (
        <h3 className="empty-cart-text" style={{ display: isOpen ? "" : "none" }}>
          No items added to cart yet. Start shopping now!
        </h3>
      )}
      <button id="paryment-info-btn" className="side-bar-button" onClick={handleMenuClick}> 
        <img className="btn-img" src={paymentInfoIcon} />
      </button>
      <Checkout  style={{ display: isOpen ? "" : "none" }} shoppingCart={shoppingCart}/>
      <button id="checkout-btn" className="side-bar-button" onClick={(event) => {
        setIsOpen(false)
        setShoppingCart([])
      }}>
        <img className="btn-img" src={checkOutIcon} />
      </button>
    </section>
  );
}
