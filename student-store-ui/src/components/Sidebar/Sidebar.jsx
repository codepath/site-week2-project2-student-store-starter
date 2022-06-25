import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar(props) {




  let sidebarClassName = "";
  let sidebarKey = "";

  if (props.isOpen == false) {
    sidebarClassName = "sidebar closed"
    sidebarKey = true
    
  }
  else {
    sidebarClassName = "sidebar open"
    sidebarKey = false
  }


  return (
    <section className={sidebarClassName}>
      <div className="sidebar-container">

          
        <button className = "arrow-btn" onClick = {() => props.setIsOpen(sidebarKey)}><RightArrowIcon/></button>
        {!props.isOpen ? <div> <ShopCartIcon/> <CoinIcon/> <FormIcon/> </div> : <ShoppingCart isOpen ={props.isOpen} products = {props.products} shoppingCart = {props.shoppingCart} setShoppingCart = {props.setShoppingCart} 
                                                                                checkoutForm = {props.checkoutForm} setCheckoutForm ={props.setCheckoutForm} handleOnCheckoutFormChange = {props.handleOnCheckoutFormChange} 
                                                                                handleOnSubmitCheckoutForm = {props.handleOnSubmitCheckoutForm} showReceipt = {props.showReceipt} setShowReceipt ={props.setShowReceipt} receipt = {props.receipt} 
                                                                                checkoutSuccess = {props.checkoutSuccess} setCheckoutSuccess ={props.setCheckoutSuccess}/>}



      </div>
        
    </section>
  )
}



export function RightArrowIcon() {
  return (
    <div className="right-arrow-icon">
      <i className="fa-solid fa-arrow-right fa-3x"></i>
    </div>
  )
}

export function CoinIcon() {
  return (
    <div className="coin-icon">
        <i className="fa-solid fa-coins fa-2x"></i>
    </div>
  )
}

export function ShopCartIcon() {
  return (
    <div className="shop-cart-icon">
        <i className="fa-solid fa-cart-shopping fa-2x"></i>
    </div>
  )
}

export function FormIcon() {
  return (
    <div className="form-icon">
        <i className="fa-solid fa-clipboard-list fa-2x"></i>
    </div>
  )
}