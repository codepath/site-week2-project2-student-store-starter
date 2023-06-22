import * as React from "react";
import "./Sidebar.css";
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <button onClick={toggleSidebar}>Open</button>
      {!isOpen ? (
        <div className="sidebar-icons">
        <ul>
          <li><img src="src/assets/shopping-cart-icon.png" width="40px" alt="Shopping Cart" /></li>
          <li><img src="src/assets/money-icon.png" width="40px" alt="Money" /></li>
          <li><img src="src/assets/reciept-icon.png" width="40px" alt="Receipt" /></li>
        </ul>
      </div>
      ) : (
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
      )}
    </div>
  );
}

/* import * as React from "react";
import "./Sidebar.css";
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <button onClick={toggleSidebar}>Open</button>
      <div className="sidebar-icons">
        <ul>
          <li><img src="src/assets/shopping-cart-icon.png" alt="Shopping Cart" /></li>
          <li><img src="src/assets/money-icon.png" alt="Money" /></li>
          <li><img src="src/assets/reciept-icon.png" alt="Receipt" /></li>
        </ul>
      </div>
    </div>
  );
}

*/