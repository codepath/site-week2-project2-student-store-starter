import * as React from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <section className="sidebar closed">
      <div className="sidebar-wrapper">
        <button className="toggle-button">
          <i className="fa-solid fa-arrow-right arrow"></i>
        </button>
        <ShoppingCart />
      </div>
    </section>
  )
}
