import * as React from "react"
import "./Sidebar.css"
import { Bars3Icon } from "@heroicons/react/24/outline"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import { useState } from "react"

export default function Sidebar({cartItems, setCartItems, allItemSubtotal}) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOnToggle() {
    setIsOpen(!isOpen)
  }

  function additionalDetails() {
    if(isOpen) {
      return (
        <>
          <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} allItemSubtotal={allItemSubtotal}/>
        </>
      )
    }
  }
  return (
    <section className="sidebar" style={{ width: isOpen ? '500px' : '100px' }}>
    <button className="toggle-button" onClick={() => handleOnToggle()}>
      { isOpen ? "⬅️": "➡️"} 
      </button>
      { additionalDetails() } 
      </section>
  )
}




