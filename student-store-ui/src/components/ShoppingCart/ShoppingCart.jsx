import * as React from "react"
import "./ShoppingCart.css"

import CheckoutForm from "../CheckoutForm/CheckoutForm"
import Receipt from "../Receipt/Receipt"



export default function ShoppingCart(props) {


    //intializing price variables
    let subtotal = 0
    let taxes = 0
    let total = 0





    return (
        



    <div className = "shopping-cart">
        <h3 className = "shopping-cart-title">Shopping Cart <span><ShopCartIcon/></span></h3>
        
        {/* conditionally rendering checkout table & totals as long as shopping cart isn't empty */}
        {props.shoppingCart.length <= 0 ? (<div className = "warning-message">No items added to cart yet. Start shopping now!</div>) : 
            <div className = "checkout-table">
                <div className = "checkout-table-header">
                <span className = "checkout-table-name">Name</span>
                <span className = "checkout-table-quantity">Quantity</span>
                <span className = "checkout-table-unit">Unit Price</span>
                <span className = "checkout-table-cost">Cost</span>
            </div>

        {/* looping through shopping cart to get product details and price */}
        {props.shoppingCart.map((object) => { 
                let matchingProduct = props.products.find((product) => product.id === object.itemId)
                let cost = matchingProduct.price*object.quantity
                subtotal += cost
                taxes = subtotal * 0.0875
                total = subtotal + taxes
                return(
                         
                        <div className = "product-row">
                            <span className ="cart-product-name">{matchingProduct.name}</span>
                            <span className ="cart-product-quantity">{object.quantity}</span>
                            <span className ="product-row-unit">{matchingProduct.price}</span>
                            <span className ="product-row-cost">{cost.toFixed(2)}</span>
                        </div>)

            })}
        </div> }




        {/* conditionally rendering the shopping cart totals, won't display if empty cart */}
        {props.shoppingCart.length <= 0 ? null : 
            <div className="totals-container">
                <div className = "subtotal-header">
                    <span className = "subtotal-header-text">Subtotal</span>
                    <span className = "subtotal-text">{subtotal.toFixed(2)}</span>
                </div>
                <div className = "subtotal-header">
                    <span className = "subtotal-header-text">Taxes and Fees</span>
                    <span className = "subtotal-text">{taxes.toFixed(2)}</span>
                </div>
                <div className = "subtotal-header">
                    <span className = "subtotal-header-text">Total</span>
                    <span className = "subtotal-text">{total.toFixed(2)}</span>
                </div>
            </div>
            }
   

        <CheckoutForm isOpen = {props.isOpen} shoppingCart = {props.shoppingCart} checkoutForm ={props.checkoutForm} handleOnCheckoutFormChange = {props.handleOnCheckoutFormChange} handleOnSubmitCheckoutForm = {props.handleOnSubmitCheckoutForm}/> 
        {/* conditionally rendering to show default checkout form text or user's recent for last order */}
        {props.showReceipt && props.checkoutSuccess  ? <Receipt setShowReceipt = {props.setShowReceipt} checkoutForm = {props.checkoutForm} shoppingCart = {props.shoppingCart} products = {props.products} receipt = {props.receipt} 
        checkoutSuccess = {props.checkoutSuccess} setCheckoutSuccess ={props.setCheckoutSuccess}/>
         :  <p className = "confirmation-text">A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>}


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






