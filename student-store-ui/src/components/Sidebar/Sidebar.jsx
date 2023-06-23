import * as React from "react"
import "./Sidebar.css"
import { useState } from "react";

export default function Sidebar({ cart, isCollapsed, setIsCollapsed }) {


  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

return (
  <section className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
    { !isCollapsed && (
      <div>
        <div className="cart">
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>The cart is empty</p>
          ) : (
            cart.map((product, index) => (
              <div key={index}>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            ))
          )}
        </div>
      </div>
    )}
  </section>
)
 }