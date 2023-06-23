import * as React from "react";
import CheckoutIcon from "remixicon-react/CheckboxCircleFillIcon"
import "./CheckoutForm.css"

export default function CheckoutForm () {
    return(
        <div className="checkout" >
            <span>
            <h3 className="check-text">Checkout Info</h3>
            <CheckoutIcon/>
            </span>
        <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>
        </div>
                )
}
