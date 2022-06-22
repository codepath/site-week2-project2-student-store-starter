import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({ isOpen, shoppingCart, products,
  checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle }) {
  const menuCollapse = isOpen ? "open" : "closed";
  console.log(menuCollapse);
  return (
    <div className={`sidebar ${menuCollapse}`}>
      <div className="wrapper">
        <button className={`toggle-button button ${menuCollapse}`} onClick={handleOnToggle}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
      </div>
      <p>Sidebar</p>
    </div>
  )
}
