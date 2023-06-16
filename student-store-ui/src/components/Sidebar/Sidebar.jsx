import * as React from "react"
import "./Sidebar.css"
import { useState } from "react";

function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="sidebarContainer" style={{borderStyle:"solid", width: (isOpen ? "20%" : "7.5%"), transition: "width 150ms ease"}}>
      <button className="Side-button" onClick={() => {setOpen(!isOpen)}}>Click Me!</button>
      <div style = {{display: isOpen ? "block" : "none"}}>
        Name
        <input style = {{width: "90%"}} type = "text" />
        Email 
        <input style = {{width: "90%"}} type = "text" /> <br/>
        <input type = "checkbox" name = "" id = "" />
        I agree to the terms and conditions <br/>
        <button>
          Checkout
        </button> <br/>
        A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.
      </div>
    </section>
  )
}

export default Sidebar