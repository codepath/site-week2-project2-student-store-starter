import * as React from "react"
import { useState } from 'react';
import "./Sidebar.css"

import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar(props) {

  const [sidebarClass, setSidebarClass] = useState(props.sidebar)
  
  const closeHandler = (e) => {
    e.preventDefault()
    setSidebarClass("sidebar close")
    setTimeout(() => {
      props.close()
    }, 250)
    
  }

  return (
    <section className={sidebarClass}>
      <button id="close" onClick={closeHandler}> &times; Close Shopping Cart</button>
      <ShoppingCart />
    </section>
  )
}
