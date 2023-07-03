import * as React from "react"
import "./Sidebar.css"
import { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Loginform from "../Login/Login";
import Checkout from "../Checkout/Checkout";

function Sidebar({ShoppingList, SetShoppingList}) {
  //useStates for sidebar login and price totals
  const[Name, SetName] = useState("")
  const[Email, SetEmail] = useState("")
  const [SubTotal, SetSubTotal] = useState(0)


  //State varible to toggle the sidebar
  const [isOpen, setOpen] = useState(false);
  const imageURL = "https://freepngimg.com/save/9905-arrow-transparent/594x256"
  return (
    //sidebar styling
    <section className="sidebarContainer" style={{borderStyle:"solid", width: (isOpen ? "20%" : "7.5%"), transition: "width 150ms ease"}}>
      {/* Button to toggle */}
      <img src = {imageURL} className="ArrowButton" alt="Cart Button" style = {{maxWidth:"100px"}} onClick={() => {setOpen(!isOpen)}}/>
    
      {/* Content of Sidebar */}
      <div className="ComponentContainer" style = {{display: isOpen ? "block" : "none"}}>
        <ShoppingCart ShoppingList = {ShoppingList} SubTotal={SubTotal} SetSubTotal={SetSubTotal}/>
        <div className="CartClear">
          <button className="ClearButton" onClick={() => {SetShoppingList([])}}>Clear Cart</button>
        </div>
        <Loginform SetName = {SetName} SetEmail = {SetEmail}/>
        <Checkout ShoppingList={ShoppingList} SubTotal={SubTotal} Name={Name} Email={Email}/>
      </div>
    </section>
  )
}

export default Sidebar