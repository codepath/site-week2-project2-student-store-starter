import * as React from "react"
import "./Sidebar.css"
import{FaBars, FaTimes} from "react-icons/fa"

export default function Sidebar() {
  return (
    <section className="sidebar">
      <p>Sidebar</p>
        <a href="/#">Shopping Cart</a>
        <a href="/#">Checkout Form</a>
      {/* <button>
        <FaTimes/>
      </button>
      <button>
        <FaBars/>
      </button> */}
  
    </section>
  )
}
