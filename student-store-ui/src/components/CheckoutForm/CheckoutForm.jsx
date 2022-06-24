import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm(props) {
  

    return (
        
    <div className = "checkout-form">
        <h3 className = "shopping-cart-title">Payment Info <span><CoinIcon/></span></h3>
        <div className ="name-input">
            <p className ="name-label">Name</p>
            <input name = "name" className ="checkout-form-input" type="text" value = {props.checkoutForm.name} onChange = {(evt) => props.handleOnCheckoutFormChange(evt.target.name, evt.target.value)} placeholder ="Student Name"/>
        </div>
        <div className ="email-input">
            <p className ="email-label">Email</p>
            <input name = "email" className ="checkout-form-input" type="email" value = {props.checkoutForm.email} onChange = {(evt) => props.handleOnCheckoutFormChange(evt.target.name, evt.target.value)}placeholder ="student@codepath.org"/>
        </div>
        <div className ="terms">
            <input name ="terms-and-conditions"type="checkbox" />
            <span className = "terms-label">I agree to the terms and conditions</span>
        </div>
        <button className ="checkout-button" onClick = {props.handleOnSubmitCheckoutForm}>Checkout</button>

        <h3 className = "checkout-info-title">Checkout Info <span><FormIcon/></span></h3>
        

        
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
 