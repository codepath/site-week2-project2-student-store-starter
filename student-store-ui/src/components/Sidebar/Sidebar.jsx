import * as React from "react"
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar-container">
      
        <RightArrowIcon/>
        <CoinIcon/>
        <ShopCartIcon/>
        <FormIcon/>


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
        <i class="fa-solid fa-clipboard-list fa-2x"></i>
    </div>
  )
}