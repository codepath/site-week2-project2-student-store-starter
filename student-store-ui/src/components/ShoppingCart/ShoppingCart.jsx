import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({}) {
  return (
    <section className="cart">
      <h3 className="">
        Shopping Cart
        <span className="button">
          <i className="material-icons md-48">add_shopping_cart</i>
        </span>
      </h3>
      <div className="notification">
        No items added to cart yet. Start shopping now!
      </div>
      <h3 className="">
        Payment Info
        <span className="button">
          <i className="material-icons md-48">monetization_on</i>
        </span>
      </h3>
      <label className="label">Name</label>
      <div className="control ">
        <form>
        <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" value=""/>
        </form>
      </div>
      <div className="input-field">
        <label className="label">Email</label>
        <div className="control">
          <form>
          <input name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" value=""/>
          </form>
        </div>
        <div>
        <input name="termsAndConditions" type="checkbox"/>
          <span className="label">
            I agree to the
            <a href="#terms-and-conditions">terms and conditions</a>
          </span>
        </div>
        <p className="is-danger"></p>
        <button className="button checkout-button">Checkout</button>
      </div>
      <h3>
        Checkout Info
        <i className="material-icons md-48">fact_check</i>
      </h3>
    </section>
  );
}
