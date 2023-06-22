import React from 'react'
import "./CheckoutForm.css"
export default function CheckoutForm({
    isOpen,
    shoppingCart,
    checkoutForm,
    handleOnCheckoutFormChange,
    handleOnSubmitCheckoutForm}) {
    return (
    <div className="checkout-form">
        <h3>Payment Info
        <span className="button">
            <i className="material-icons md-48"></i>
        </span>
        </h3>
        <div className="input-field">
            <label className="label">Name</label>
            <div className="control">
                <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" />
            </div>
        </div>
        <div className="input-field">
            <label className="label">Email</label>
            <div className="control">
                <input name="email" className="checkout-form-input" type="text" placeholder="student@codepath.org" />
            </div>
        </div>
        <div className="field">
            <div className="control">
                <label className="checkbox">
                    <input name="termsAndConditions" type="checkbox" />
                    <span className="label">
                        I agree to the 
                        <a href="#terms-and-conditions"> terms and conditions</a>
                    </span>
                </label>
            </div>
        </div>
        <p className="is-danger"></p>
        <div className="field">
            <div className="control">
                <button className="button checkout-button" onClick={handleOnSubmitCheckoutForm}>Checkout</button>
            </div>
        </div>
    </div>
    )
}