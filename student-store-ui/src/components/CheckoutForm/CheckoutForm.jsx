import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm(props) {
    return (<div className="checkout-form">
        <h2>Payment Info</h2>
        <input type="email" name="email" placeholder="student@codepath.org" value={props.checkoutForm.email} 
        onChange={(event) => {props.handleOnCheckoutFormChange(event.target.name, event.target.value)}} />
        <input type="text" name="name" placeholder="Student Name" value={props.checkoutForm.name} 
        onChange={(event) => {props.handleOnCheckoutFormChange(event.target.name, event.target.value)}} />
        <button type="submit" onClick={props.handleOnSubmitCheckoutForm}>Checkout</button>
    </div>);
}