import * as React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
// import Cancel, { colorPalette } from "material-icons-react";
// import { BiSolidCartAdd } from "react-icons/fa";
// // import { AiOutlineShoppingCart } from "react-icons/fa";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
></link>;

export default function Sidebar({}) {
  const [isOpen, setIsOpen] = useState(false);

  const openTable = (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Cost</th>
        </tr>
      </table>
      <h3>Payment Info</h3>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name"></input>
        <label for="email">Email</label>
        <input type="text" id="email" name="email"></input>
        <button className="checkout-btn">Checkout</button>
      </form>
    </>
  );

  return (
    <section className={isOpen ? "sidebar open" : "sidebar closed"}>
      <h3>Shopping Cart</h3>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen ? openTable : null}
    </section>
  );
}
