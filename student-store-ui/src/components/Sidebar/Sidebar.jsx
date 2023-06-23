import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";

export default function Sidebar() {
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
