import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({shoppingCart, setShoppingCart, quantity, setQuantity, products}) {
  const [sideBar, setSideBar] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const[total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const[checkout, setCheckout] = useState(false);

  function handleToggleButton() {
    setSideBar((sideBar) => !sideBar);

    if (sideBar) {
      <span className=".sidebar.open"></span>;
      setSideBar(false);
    }
  }

  function showIcons(){
    return (
      <>
      <div className="shopping-cart">

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
    </>

    )
  }
  return (
    <section className={`sidebar ${sideBar ? "open" : "closed"}`}>
      <div className="wrapper">
        <button
          className="toggle-button button closed"
          onClick={handleToggleButton}
        >
          <i className="material-icons md-48">arrow_forward</i>
        </button>

        {sideBar ? (
          <ShoppingCart
            shoppingCart={shoppingCart}
            products={products}
            setShoppingCart={setShoppingCart}
            quantity={quantity}
            subtotal={subtotal}
            setSubtotal={setSubtotal}
            total={total}
            setTotal={setTotal}
            taxes={taxes}
            setTaxes={setTaxes}
            setQuantity={setQuantity}
            checkout={checkout}
            setCheckout={setCheckout}
          />
        ) : (
          showIcons()
        )}

      </div>
    </section>
  );
}
