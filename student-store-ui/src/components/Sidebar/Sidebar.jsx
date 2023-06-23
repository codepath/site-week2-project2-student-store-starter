import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faCartPlus,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useState } from "react";

import "./Sidebar.css";

export default function Sidebar({ setShoppingCart, shoppingCart }) {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [lastSavedName, setLastSavedName] = useState("");
  const [savedSubtotal, setSavedSubtotal] = useState(0);
  const [savedTotal, setSavedTotal] = useState(0);
  const [lastSavedEmail, setLastSavedEmail] = useState("");
  const [lastSavedSC, setLastSavedSC] = useState([]);
  const [checkout, setCheckout] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (name && email && termsChecked && shoppingCart.length > 0) {
      setSavedSubtotal(subtotal);
      setSavedTotal(total);
      setLastSavedSC(shoppingCart);
      setShoppingCart([]);
      setLastSavedName(name);
      setLastSavedEmail(email);
      setEmail("");
      setName("");
      setTermsChecked(false);
      setCheckout("purchase");
    }
  }

  console.log(subtotal);
  console.log(total);

  return (
    <>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fa fa-bars"> </i>
      </label>
      <section style={{ color: "white" }} className="sidebar">
        <div id="infoSidebar" style={{ textAlign: "center" }}>
          <p className="sidebarHeader">
            Shopping Cart <FontAwesomeIcon icon={faCartPlus} bounce />
          </p>
          <ShoppingCart
            subtotal={subtotal}
            setSubtotal={setSubtotal}
            total={total}
            setTotal={setTotal}
            taxes={taxes}
            setTaxes={setTaxes}
            setShoppingCart={setShoppingCart}
            shoppingCart={shoppingCart}
          />
          <br />
          <p id="paymentHeader" className="sidebarHeader">
            Payment Info <FontAwesomeIcon icon={faDollarSign} flip />
          </p>
        </div>
        <form action="search" className="sidebar-label">
          <label htmlFor="name">Name</label> <br />
          <input
            value={name}
            onChange={handleName}
            type="text"
            name="name"
            placeholder="student@codepath.org"
            className="input-sidebar"
            required
          />
          <label className="sideBarInfo" htmlFor="email">
            Email
          </label>
          <br />
          <input
            value={email}
            onChange={handleEmail}
            className="input-sidebar"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <div id="termSidebar">
            <input
              style={{ width: "12px", height: "12px" }}
              type="checkbox"
              checked={termsChecked}
              onChange={(event) => setTermsChecked(event.target.checked)}
              required
            />
            <span>
              I agree to the &thinsp;
              <a
                style={{ color: "var(--light-cp", textDecoration: "none" }}
                href="/"
              >
                terms and conditions
              </a>
            </span>
            {!name && (
              <p style={{ color: "red", margin: "0", fontWeight: "bold" }}>
                Please fill out the name field!
              </p>
            )}
            {!email && (
              <p style={{ color: "red", margin: "0", fontWeight: "bold" }}>
                Please fill out the email field!
              </p>
            )}
            {!termsChecked && (
              <p style={{ color: "red", margin: "0", fontWeight: "bold" }}>
                Please agree to the terms and conditions!
              </p>
            )}
            {shoppingCart?.length === 0 && (
              <p style={{ color: "red", margin: "0", fontWeight: "bold" }}>
                Please add to your cart!
              </p>
            )}
          </div>
          <button onClick={handleSubmit} id="button-sidebar" type="submit">
            Checkout
          </button>
        </form>
        <div id="infoSidebar">
          <p className="sidebarHeader">
            Checkout Info <FontAwesomeIcon icon={faListCheck} shake />
          </p>
          <CheckoutForm
            checkout={checkout}
            setCheckout={setCheckout}
            email={lastSavedEmail}
            name={lastSavedName}
            shoppingCart={lastSavedSC}
            subtotal={savedSubtotal}
            total={savedTotal}
          />
        </div>
      </section>
    </>
  );
}
