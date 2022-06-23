import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle}) {
  return (
    // <section className="sidebar">
    //   {/* change to imgs later */}

      
    // </section>
    <aside className="sidebar">
      <nav className="nav">
        <ul>
          <li><a href="" className="sideBarLink">Shopping Cart</a></li>
          <li><a href="" className="sideBarLink">Payment Info</a></li>
          <li><a href="" className="sideBarLink">Checkout Info</a></li>
        </ul>
      </nav>
  </aside>
  )
}
