import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart(props) {

    let isEmpty
    if (props.shoppingCart.length === 0) {
        isEmpty = true
    }
    else {
        isEmpty = false
    }
    return (
        




    <div className = "shopping-cart">
        <h3 className = "shopping-cart-title">Shopping Cart <span><ShopCartIcon/></span></h3>
        
        {isEmpty ? <div className = "warning-message">No items added to cart yet. Start shopping now!</div> : <CheckoutTable/>}


        
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



export function CheckoutTable(props) {
    return (
        <div className = "checkout-table">
        </div>
    )
}