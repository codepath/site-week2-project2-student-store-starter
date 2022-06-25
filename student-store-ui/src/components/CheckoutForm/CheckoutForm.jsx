import * as React from "react"

export default function checkoutForm(props){
    <div class="checkout-from">
        <h3>Payment Info</h3>
        <input 
            type="text" 
            name="name" 
            placeholder="Enter name" 
            value={props.checkoutForm}
            onChange={props.handleCheckoutFormChange}
        />
        <div className="control">
          <input
            className="checkout-form-input"
            type="email"
            name="email"
            placeholder="student@codepath.org"
            value={props.CheckoutForm}
            onChange={props.handleCheckoutFormChange}
          />
        </div>
    </div>
}