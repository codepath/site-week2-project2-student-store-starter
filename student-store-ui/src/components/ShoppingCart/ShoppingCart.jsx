import * as React from "react"
import "./ShoppingCart.css"

// importing hooks
import { useState, useEffect } from "react"



export default function ShoppingCart(props) {

    const [subtotal, setSubtotal] = useState(0)




    return (
        


    <div className = "shopping-cart">
        <h3 className = "shopping-cart-title">Shopping Cart <span><ShopCartIcon/></span></h3>
        
        {props.shoppingCart.length <= 0 ? (<div className = "warning-message">No items added to cart yet. Start shopping now!</div>) : <CheckoutTable shoppingCart = {props.shoppingCart} products = {props.products} subtotal = {subtotal} setSubtotal = {setSubtotal}/> }
        <TotalBox/>
        <h3 className = "shopping-cart-title">Payment Info <span><CoinIcon/></span></h3>
        <div className ="name-input">
            <p className ="name-label">Name</p>
            <input name = "name" className ="checkout-form-name" type="text" placeholder ="Student Name"/>
        </div>
        <div className ="email-input">
            <p className ="email-label">Email</p>
            <input name = "email" className ="checkout-form-email" type="text" placeholder ="student@codepath.org"/>
        </div>
        <div className ="terms">
            <input name ="terms-and-conditions"type="checkbox" />
            <span className = "terms-label">I agree to the terms and conditions</span>
        </div>
        <button className ="checkout-btn">Checkout</button>

        <h3 className = "checkout-info-title">Checkout Info <span><FormIcon/></span></h3>
        <p className = "confirmation-text">A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>





    </div>

  )
}







export function CheckoutTable(props) {


    
    return (
        <div className = "checkout-table">
            <div className = "checkout-table-header">
                <span className = "checkout-table-name">Name</span>
                <span className = "checkout-table-quantity">Quantity</span>
                <span className = "checkout-table-unit">Unit Price</span>
                <span className = "checkout-table-cost">Cost</span>
            </div>
            {props.shoppingCart.map((object) => { 
                return <CheckoutTableRows key = {object.itemId} itemId = {object.itemId} quantity = {object.quantity} products = {props.products} subtotal = {props.subtotal} setSubtotal = {props.setSubtotal}/>
            })}
        </div>
    )
}


export function CheckoutTableRows(props) {
    console.log("subtotal:", props.subtotal)

    //parsing through to grab rest of table details
    let matchingProduct = props.products.find((product) => product.id === props.itemId)
    let cost = matchingProduct.price*props.quantity


    //updating subtotal

    const calculateSubtotal = () => {
        props.setSubtotal((currentSubtotal) => currentSubtotal + (cost * props.quantity))
    }


    useEffect(() => {

        calculateSubtotal();
    }, []);
    console.log("props.quantity",props.quantity)


    // useEffect(() => {
    //     const calculateSubtotal = () => {
    //         props.setSubtotal((currentSubtotal) => currentSubtotal + (cost * props.quantity))
    //     }
    //     calculateSubtotal();
    // }, []);



 


    return (
            <div className = "product-row">
                <span className ="product-row-name">{matchingProduct.name}</span>
                <span className ="product-row-quantity">{props.quantity}</span>
                
                <span className ="product-row-unit">{matchingProduct.price}</span>
                <span className ="product-row-cost">{cost}</span>
            </div>
    )
}



export function TotalBox() {


    return (
      <div className="totals-container">

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


  export function CoinIcon() {
    return (
      <div className="coin-icon">
          <i className="fa-solid fa-coins fa-2x"></i>
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
