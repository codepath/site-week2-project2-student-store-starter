import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm() {
    return (
        <>
            <div className="shopping-cart">
                    <div className="checkout-form">
                        <h3 className="">Payment Info <span className="button"><i className="material-icons md-48">monetization_on</i></span></h3>
                        <div className="input-field">
                            <label className="label">Name</label>
                            <div className="control "><input name="name" className="checkout-form-input" type="text" placeholder="Student Name" value="" /></div>
                        </div>
                        <div className="input-field">
                            <label className="label">Email</label>
                            <div className="control"><input name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" value="" /></div>
                        </div>
                        <div className="field">
                            <div className="control"><label className="checkbox"><input name="termsAndConditions" type="checkbox" /><span className="label" />I agree to the <a href="#terms-and-conditions">terms and conditions</a><span /></label></div>
                        </div>
                        <p className="is-danger"></p>
                        <div className="field">
                            <div className="control"><button className="button checkout-button">Checkout</button></div>
                        </div>
                    </div>
                    <div className="checkout-success">
                        <h3>Checkout Info <span className="icon button"><i className="material-icons md-48">fact_check</i></span></h3>
                        <div className="content">
                            <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the
                                order, it will be delivered to your dorm room.
                            </p>
                        </div>
                    </div>
                
            </div>

        </>


    )
}