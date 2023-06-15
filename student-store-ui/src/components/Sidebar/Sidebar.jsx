import * as React from "react";
import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  function SideBarShoppingCart(){
    // used to display user checkout items and
    // calculate user checkout total
    return (
      <>
      </>
    )
  }
  function SideBarCheckoutForm(){
    // form to handle user checkout credentials
    return (
      <>
      </>
    )
  }
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className={"sidebar-container " + (isOpen ? "open" : "")}>
      <button className={"sidebar-toggle-button" + (isOpen ? "open" : "")}>
        <i className="material icons classnae here"> </i>
      </button>
      {}
    </section>
  )
}
