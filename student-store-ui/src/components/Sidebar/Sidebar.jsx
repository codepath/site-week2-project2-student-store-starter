import * as React from "react";
import "./Sidebar.css";

import SidebarActive from "./SidebarActive/SidebarActive"
import SidebarClosed from "./SidebarClosed/SidebarClosed";

export default function Sidebar({ isActive = false, handleClick }) {
    const sidebarClassName = isActive ? "sidebar open" : "sidebar closed";
    const toggleButtonClassName = isActive
      ? "toggle-button button open"
      : "toggle-button button closed";
  
    return (
      // the side bar class will change
      <section className={sidebarClassName}>
        <div className="wrapper">
          <button className={toggleButtonClassName} onClick={handleClick}>
                <i className="material-icons md-48">arrow_forward</i>
          </button>
          {
            isActive ? 
             <SidebarClosed />: 
             <SidebarActive/>
          }
        </div>
      </section>
    );
}