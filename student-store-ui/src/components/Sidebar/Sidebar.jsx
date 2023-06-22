import * as React from "react"
import "./Sidebar.css"
import { Bars3Icon } from "@heroicons/react/24/outline"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar(props, {cartItems, setCartItems, allItemSubtotal}) {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar-closed"
      if (props.isOpen){

        return (
        <section className={sidebarClass}>
        <div className="wrapper">
          <button onClick={props.toggleSidebar} className="sidebar-toggle">
          <Bars3Icon />
        </button>
          <div className="shopping-cart">
            <div className="open">
              <h3 className="">
                Shopping Cart <span className="button">
                  <i className="material-icons md-48">add_shopping_cart</i>
                </span>
              </h3>
              {props.isOpen && (
                <div className="notification">No items added to cart yet. Start shopping now!</div>
              )}
              <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} allItemSubtotal={allItemSubtotal}/>
              <div className="checkout-form">
                <p>Name</p>
                <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" value="">
                </input>
              </div>
              <div className="checkout-success">
                {/* Checkout success info */}
              </div>
            </div>
          </div>
        </div>
      </section>
        )
      }
      
      else{
        return (
        <section className={sidebarClass}>
        <div className="wrapper">
          {/* Sidebar content when closed */}
        </div>
      </section>
        )
      }
}



