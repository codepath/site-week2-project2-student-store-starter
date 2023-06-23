import * as React from "react"
import "./Sidebar.css"
import { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Loginform from "../Login/Login";

// function Loginform(){
//   return(
//     <div className="Loginform">
//       <h2>Login</h2>
//       <form>
//         <div className="formGroup">
//           <label htmlFor="email">Email</label>
//           <input type = "email" id = "email" placeholder="Enter Your Email"/>
//         </div>
//         <div className="formGroup">
//           <label htmlFor="password">Password</label>
//           <input type = "password" id = "password" placeholder="Enter Your Password"/>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

function Sidebar({ShoppingList}) {
  //State varible to toggle the sidebar
  const [isOpen, setOpen] = useState(false);
  return (
    //sidebar styling
    <section className="sidebarContainer" style={{borderStyle:"solid", width: (isOpen ? "20%" : "7.5%"), transition: "width 150ms ease"}}>
      {/* Button to toggle */}
      <button className="Side-button" onClick={() => {setOpen(!isOpen)}}>Side Bar</button>
      {/* Content of Sidebar */}
      <ShoppingCart ShoppingList = {ShoppingList}/>
      <Loginform/>
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