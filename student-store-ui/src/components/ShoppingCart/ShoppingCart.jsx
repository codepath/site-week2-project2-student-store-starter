import * as React from "react"
import "./ShoppingCart.css"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

// importing hooks
import { useState, useEffect } from "react"



export default function ShoppingCart(props) {

    const [subtotal, setSubtotal] = useState(0)




    return (
        


    <div className = "shopping-cart">
        <h3 className = "shopping-cart-title">Shopping Cart <span><ShopCartIcon/></span></h3>
        
        {props.shoppingCart.length <= 0 ? (<div className = "warning-message">No items added to cart yet. Start shopping now!</div>) : <CheckoutTable shoppingCart = {props.shoppingCart} products = {props.products} subtotal = {subtotal} setSubtotal = {setSubtotal}/> }
        <TotalBox/>
        <CheckoutForm isOpen = {props.isOpen} shoppingCart = {props.shoppingCart} checkoutForm ={props.checkoutForm} handleOnCheckoutFormChange = {props.handleOnCheckoutFormChange} handleOnSubmitCheckoutForm = {props.handleOnSubmitCheckoutForm}/>






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
    console.log("props.quantity", props.quantity)


    //updating subtotal
    const calculateSubtotal = () => {
        props.setSubtotal((currentSubtotal) => currentSubtotal + (cost))
    }

    // need to fix, quantity isn't changing, only stays at 1, refreshes when sidebar is opened and closed...
    useEffect(() => {

        calculateSubtotal();
    }, []);
    


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
