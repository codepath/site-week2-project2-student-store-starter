import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button onClick={toggleSidebar}>
        {isCollapsed ? "Show Cart" : "Hide Cart"}
      </button>
      {!isCollapsed && (
        <div>
          <p>Sidebar</p>
          {/* You can add your shopping cart component or any other content here */}
        </div>
      )}
    </section>
  );
}
