import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart() {
  return (
    <div className="shopping-cart">
      <div className ="open">
        <h3 className="shopping-cart-title">Shopping Cart 
        <span className="button"><i className="shopping-cart-material-icons"></i></span></h3>
        <div className="notification">No items added to cart yet. Start shopping now!</div>
        <div className="checkout-form">
        <h3 className="">Payment Info <span className="button">
        <i className="material-icons md-48">monetization_on</i>
        </span></h3>
        <div className="input-field">
        <label className="label">Name</label>
        <div className="control ">
        <input id="name" className="checkout-form-input" type="text" placeholder="Student Name" value=""/>
        </div>
        </div>
        <div className="input-field">
        <label className="label">Email</label>
        <div className="control">
        <input id="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" value=""/>
        </div>
        </div>
        <div className="field">
        <div className="control">
        <label className="checkbox">
        <input id="termsAndConditions" type="checkbox"/>
        <span className="label">I agree to the <a href="#terms-and-conditions">terms and conditions</a></span>
        </label>
        </div>
        </div>
        <p className="is-danger">
        </p><div className="field">
        <div className="control">
        <button className="button checkout-button">Checkout</button>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}