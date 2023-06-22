import * as React from "react"
import "./Sidebar.css"
import { useState } from "react";

export default function Sidebar({ cart }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section className="sidebar">
      <button onClick={toggleSidebar}>{isCollapsed ? "Show cart" : "Hide cart"}</button>
      {!isCollapsed && (
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
      )}
    </section>
  );
}
