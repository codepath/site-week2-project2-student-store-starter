import * as React from "react";
import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  function SideBarShoppingCart(){
    return (
      <>
      </>
    )
  }
  function SideBarCheckoutForm(){
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
