import * as React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/fa";
import { FaBeerMugEmpty } from "react-icons/fa";

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
        <FaBeerMugEmpty />
      </Link>
    </section>
  );
}
