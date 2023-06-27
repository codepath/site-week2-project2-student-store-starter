import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";
import ShoppingList from "../ShoppingList/ShoppingList"; 

export default function Sidebar({cart, products}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button onClick={toggleSidebar}>
        {isCollapsed ? "Show Cart" : "Hide Cart"}
      </button>
      {!isCollapsed && (
        <>
          <ShoppingList cart={cart} products={products} />
          <div>
            <p>Shopping Cart</p>
          </div>
          <div>
            <p>Payment Info</p>
          </div>
          <div>
            <p>Checkout Info</p>
          </div>
        </>
      )}
    </section>
  );
}
