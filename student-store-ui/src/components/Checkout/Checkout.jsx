import React from "react";
import "./Checkout.css";
import { useState } from "react";
import axios from "axios";
import Receipt from "../Receipt/Receipt";
export default function Checkout({ style , shoppingCart}) {
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [purchase, setPurchase] = useState({})

  const handleClick = (event) => {
    event.preventDefault()
    axios.post(`http://localhost:3001/store`, {shoppingCart: shoppingCart, user: userData})
    .then(response => setPurchase(response.data.purchase))
  };

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <form className="checkout-form" style={style}>
      <label htmlFor="name">Name</label>
      <input
        className="input-box"
        type="text"
        placeholder="Firstname Lastname"
        onChange={handleChange}
        name="name"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        className="input-box"
        type="text"
        placeholder="example@domain.com"
        onChange={handleChange}
        name="email"
        required
      />
      <button type="submit" className="checkout-btn" onClick={handleClick}>
        Check Out
      </button>

      {/* if we make a purchase, then we sgould display a receipt */}
      {Object.keys(purchase).length > 0? (<Receipt receipt={purchase.receipt} />) : <></>}
    </form>
  );
}
