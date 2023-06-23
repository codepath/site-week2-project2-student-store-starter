import { useState } from "react"

import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./Sidebar.css"

export default function Sidebar({ cart, setCart }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  
  const sidebarClass = isOpen ? "sidebar open" : "sidebar closed"

  if (isOpen) {
    return (
      <section className={sidebarClass}>
        <button onClick={handleClick}>Cart</button>
        <ShoppingCart cart={cart} setCart={setCart} />
      </section>
    )
  } else {
    return (
      <section className={sidebarClass}>
        <button onClick={handleClick}>Cart</button>
      </section>
    )
  }
}
