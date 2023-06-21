import React, { useState } from "react";
import "./Sidebar.css";
import { FaBars, FaTimes} from "react-icons/fa";

import { MdShoppingCartCheckout,MdOutlineRemoveShoppingCart } from "react-icons/md";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidebar-icon" onClick={toggleSidebar}>
        {isSidebarOpen ? <MdOutlineRemoveShoppingCart /> : <MdShoppingCartCheckout />}
      </div>
      <div className="sidebar-content">
        <a href="/#" className="sidebar-link">
          Shopping Cart
        </a>
        <a href="/#" className="sidebar-link">
          Checkout Form
        </a>
      </div>
    </div>
  );
}
