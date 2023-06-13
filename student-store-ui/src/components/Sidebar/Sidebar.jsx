import * as React from "react"
import "./Sidebar.css"

export default function Sidebar() {

  // let sidebarWidth = 100;

  return (
    <section className="sidebar closed">
      {/* <p>Sidebar</p> */}
      <div className="wrapper">
        <button className="toggle-button button closed">
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <div className="shopping-cart">
          <div className="cart-icons">
            <span className="cart-icon icon button">
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48">monetization_on</i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48">fact_check</i>
            </span>
          </div>
        </div>
      </div>
    </section>
  )

  

  
}
