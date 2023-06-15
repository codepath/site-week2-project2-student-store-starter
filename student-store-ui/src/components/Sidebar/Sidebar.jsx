import * as React from "react"
import "./Sidebar.css"
import{FaBars, FaTimes} from "react-icons/fa"

export default function Sidebar() {
  return (
    <section className="sidebar">
      <p>Sidebar</p>
      <br></br>
      <br></br>
      <br></br>

        <a href="/#">Shopping Cart</a>
        <br></br>
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
