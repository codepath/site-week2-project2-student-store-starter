import * as React from "react"
import { Link } from "react-router-dom"
import "./CheckoutForm.css"

export default function CheckoutForm(props) {
    var err = <p className="error"></p>;
    if (props.checkoutError === "item") {
        err = <p className="error">No cart or items in cart found to checkout.</p>
    }
    if (props.checkoutError === "field") {
        err = <p className="error">User info must include an email and name.</p>
    }

    return (
        <div className="checkout-form">
            <h3>Payment Info <i className="fa-solid fa-sack-dollar side-icon"></i></h3>
            <div className="input-field">
                <label className="label">Name</label>
                <div className="control">
                    <input value={props.checkoutForm.name} onChange={(e) => props.handleOnCheckoutFormChange("name", e.target.value)} type="text" name="name" className="checkout-form-input" placeholder="Student Name" />
                </div>
            </div>
            <div className="input-field">
            <label className="label">Email</label>
                <div className="control">
                    <input value={props.checkoutForm.email} onChange={(e) => props.handleOnCheckoutFormChange("email", e.target.value)} type="email" name="email" className="checkout-form-input" placeholder="student@codepath.org" />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <label className="checkbox">
                        <input type="checkbox" name="termsAndConditions"/>
                        <span className="label">
                            I agree to the <a href="#terms-and-conditions">terms and conditions</a>
                        </span>
                    </label>
                </div>
            </div>
            {props.postStatus ? <p className="success">Success!</p> : err}
            <div className="field">
                <div className="control">
                    <button className="button checkout-button" onClick={props.handleOnSubmit}>Checkout</button>
                </div>
            </div>
        </div>
    )
}

