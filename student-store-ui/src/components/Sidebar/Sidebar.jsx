import * as React from "react";
import "./Sidebar.css";
import MenuLineIcon from "remixicon-react/MenuFillIcon";

import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../Checkout/CheckoutForm";
import { useState } from "react";

export default function Sidebar({ setShoppingCart, shoppingCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [checkout, setCheckout] = useState("");

  return (
    <div className="sidebar" style={{ width: isOpen ? "30%" : "5%" }}>
      <button
        id="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {" "}
        {isOpen ? (
          <MenuLineIcon style={{ }} />
        ) : (
          <MenuLineIcon style={{ }} />
        )}{" "}
      </button>
      {isOpen && (
        <>
          <ShoppingCart
            setShoppingCart={setShoppingCart}
            shoppingCart={shoppingCart}
            subtotal={subtotal}
            setSubtotal={setSubtotal}
            total={total}
            setTotal={setTotal}
            taxes={taxes}
            setTaxes={setTaxes}
          />
          <CheckoutForm />
        </>
      )}
    </div>
  );
}
