import * as React from "react";
import CheckoutIcon from "remixicon-react/CheckboxCircleFillIcon"
import "./CheckoutForm.css"

export default function CheckoutForm ({
          email,
          setEmail,
          name,
          setName,
          checkout,
          setCheckout
        }) 

{
    return(
        <>
        <label className="form-label" htmlFor="name">Name:</label>
        <input className="form-input"
        name="student-name" placeholder="Student Name" required=""/> <br></br>
        <label className="form-label" htmlFor="password">Email:</label>
        <input className="form-input"
        name="student-name" placeholder="Student@codepath.org" required/>
        
        <input type="checkbox" required/>
        <label className="checkbox-input">I agree to the terms and conditions</label><br></br>
        <button id="checkout-button">Checkout</button>
        <div className="checkout" >
            <span>
            <h3 className="check-text">Checkout Info</h3>
            <CheckoutIcon/>
            </span>
        <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>
        </div>
        </>
            )
}
