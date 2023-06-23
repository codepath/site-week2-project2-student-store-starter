import * as React from "react"
import "./Sidebar.css"
import { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Loginform from "../Login/Login";

function Sidebar({ShoppingList}) {
  //State varible to toggle the sidebar
  const [isOpen, setOpen] = useState(false);
  const imageURL = "https://freepngimg.com/save/9905-arrow-transparent/594x256"
  return (
    //sidebar styling
    <section className="sidebarContainer" style={{borderStyle:"solid", width: (isOpen ? "20%" : "7.5%"), transition: "width 150ms ease"}}>
      {/* Button to toggle */}
      <img src = {imageURL} className="ArrowButton" alt="Cart Button" style = {{maxWidth:"100px"}} onClick={() => {setOpen(!isOpen)}}/>
      {/* <button className="Side-button" onClick={() => {setOpen(!isOpen)}}>Side Bar</button> */}
      {/* Content of Sidebar */}
      <div className="ComponentContainer" style = {{display: isOpen ? "block" : "none"}}>
        <ShoppingCart ShoppingList = {ShoppingList}/>
        <Loginform/>
      </div>
      {/* <div style = {{display: isOpen ? "block" : "none"}}>
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
      </div> */}
    </section>
  )
}

export default Sidebar