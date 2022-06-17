import * as React from "react"
import "./Sidebar.css"
import { BsFillArrowRightCircleFill, BsFillCartPlusFill, BsFillInfoCircleFill } from "react-icons/bs"
import { MdPayment } from "react-icons/md"

export default function Sidebar() {
  return (
    <section className="sidebar closed">
      <div className="wrapper">
        <button className="toggle-button button closed"><p className="material-icons"><BsFillArrowRightCircleFill /></p></button>
        <div className="shopping-cart">
          <div className="cart-icons">
            <span className="cart-icon icon button">
              <i className="material-icons"><BsFillCartPlusFill /></i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons"><MdPayment /></i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons"><BsFillInfoCircleFill /></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
