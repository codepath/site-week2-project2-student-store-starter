import { useState } from "react"

import CheckoutInfo from "../CheckoutInfo/CheckoutInfo"
import PaymentInfo from "../PaymentInfo.jsx/PaymentInfo"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./Sidebar.css"

export default function Sidebar({ cart }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  
  const sidebarClass = isOpen ? "sidebar open" : "sidebar closed"

  if (isOpen) {
    return (
      <section className={sidebarClass}>
        <button onClick={handleClick}>Cart</button>
        <ShoppingCart cart={cart}/>
        <PaymentInfo />
        <CheckoutInfo />
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
