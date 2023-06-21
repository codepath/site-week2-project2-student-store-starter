import * as React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
}) {
  return (
    <section className="sidebar">
      <Link to="#" className="menu-bar">
        <FaBars />
      </Link>
    </section>
  );
}
