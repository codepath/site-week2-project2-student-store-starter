import * as React from "react"
import { Link } from "react-router-dom"
import "./CheckoutForm.css"

export default function CheckoutForm() {
    return (
        <div className="checkout-form">
            <h3>Payment Info <i class="fa-solid fa-sack-dollar side-icon"></i></h3>
            <div className="input-field">
                <label className="label">Name</label>
                <div className="control">
                    <input type="text" name="name" class="checkout-form-input" placeholder="Student Name" />
                </div>
            </div>
            <div className="input-field">
            <label className="label">Email</label>
                <div className="control">
                    <input type="email" name="email" class="checkout-form-input" placeholder="student@codepath.org" />
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
            <div className="field">
                <div className="control">
                    <button className="button checkout-button">Checkout</button>
                </div>
            </div>
        </div>
    )
}

