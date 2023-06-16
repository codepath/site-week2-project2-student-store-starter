import * as React from "react";
import "./Sidebar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <a href="/#" className="sidebar-link">
        Shopping Cart
      </a>
      <br />
      <br />
      <br />
      <a href="/#" className="sidebar-link">
        Checkout Form
      </a>
    </section>
  );
}

