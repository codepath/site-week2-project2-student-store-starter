import * as React from "react"
import "./Sidebar.css"
import { BsFillArrowRightCircleFill, BsFillCartPlusFill, BsFillInfoCircleFill } from "react-icons/bs"
import { MdPayment } from "react-icons/md"

export default function Sidebar() {
  return (
    <section className="sidebar closed">
      <div className="sidebar-wrapper">
        <button className="toggle-button button closed"><p className="sidebar-material-icons"><BsFillArrowRightCircleFill /></p></button>
        <div className="sidebar-shopping-cart">
          <div className="sidebar-cart-icons">
            <span className="sidebar-cart-icon icon button">
              <i className="sidebar-material-icons"><BsFillCartPlusFill /></i>
            </span>
            <span className="sidebar-cart-icon icon button">
              <i className="sidebar-material-icons"><MdPayment /></i>
            </span>
            <span className="sidebar-cart-icon icon button">
              <i className="sidebar-material-icons"><BsFillInfoCircleFill /></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
