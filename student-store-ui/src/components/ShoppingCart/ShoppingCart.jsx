import * as React from "react"
import "./ShoppingCart.css"
import { useEffect } from "react";

export default function ShoppingCart(props) {

<div className="shopping-cart">
        <div className="open">
          <h3>Shopping Cart
            <span className="button">
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>
          </h3>
          {props.shoppingCart.length > 0 ? 
         
          <div className="CartTable">
            <div className="header">
              <div className="header-row">
                <span className="flex-2">Name</span>
                <span className="center">Quantity</span>
                <span className="center">Unit Price</span>
                <span className="center">Cost</span>
              </div>
              {
    props.shoppingCart.map((item) => (
      <div className="product-row" key={item.id}>
        <span className="flex-2 cart-product-name">{item.name}</span>
        <span className="center cart-product-quantity">{item.quantity}</span>
        <span className="center cart-product-price">${item.price}</span>
        <span className="center cart-product-subtotal">${item.price * item.quantity}</span>
      </div>
      ))
              }
              

            </div>
            <div className="receipt">
              <div className="receipt-subtotal">
                <span className="label">Subtotal</span>
                <span></span><span></span>
                <span className="center subtotal">${props.subTotal.toFixed(2)}</span>
              </div>
            <div className="receipt-taxes">
              <span className="label">Taxes and Fees</span>
              <span></span><span></span>
              <span className="center">${(0.0875 * props.subTotal).toFixed(2)}</span>
            </div>
          <div className="receipt-total">
            <span className="label">Total</span>
            <span></span><span></span>
            <span className="center total-price">${(props.subTotal + (0.0875 * props.subTotal)).toFixed(2)}</span>
          </div>
        </div>
      </div> 
      : <div className="notification">No items added to cart yet.</div>}
          
          <div className="checkout-form">
            <h3 className="">Payment Info 
              <span className="button">
                <i className="material-icons md-48">monetization_on</i>
              </span>
            </h3>
            <div className="input-field">
              <label className="label">Name</label>
              <div className="control ">
                <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" value={props.nameFormContent} onChange={handleNameFormChange}></input>
              </div>
            </div>
            <div className="input-field">
              <label className="label">Email</label>
              <div className="control">
                <input name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" value={props.emailFormContent} onChange={handleEmailFormChange}></input>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input name="termsAndConditions" type="checkbox"></input>
                  <span className="label">I agree to the <a href="#terms-and-conditions" className="terms-and-conditions">terms and conditions</a></span>
                </label>
              </div>
            </div>
            <p className="is-danger">{/*Insert error here when u try checking out without anything in cart */}</p>
            <div className="field">
              <div className="control">
                <button className="button checkout-button" onClick={props.handleOnSubmitCheckoutForm()}>Checkout</button>
              </div>
            </div>
          </div>

          <div className="checkout-success">
            <h3>Checkout Info 
              <span className="icon button">
                <i className="material-icons md-48">fact_check</i>
              </span>
            </h3>
            {props.checkedOut ? 
          <div class="card">
            <header class="card-head">
              <h4 class="card-title">Receipt</h4>
            </header>
            <section class="card-body">
              <p class="header">Showing receipt for aaa available at {props.checkoutName}:</p>
              <ul class="purchase">
                {props.checkoutProducts.map((product) => (
                <li>{product.quantity} total {product.name} purchased at a cost of ${product.price.toFixed(2)} for a total cost of ${(product.price * product.quantity).toFixed(2)}.</li>
                ))}
                <li>Before taxes, the subtotal was ${props.checkoutSubtotal.toFixed(2)}</li>
                <li>After taxes and fees were applied, the total comes out to ${(props.checkoutSubtotal + (0.0875 * props.checkoutSubtotal)).toFixed(2)}</li>
              </ul>
            </section>
            <footer class="card-foot">
              <button class="button is-success" onClick={() => props.setCheckedOut(false)}>Shop More</button>
              <button class="button" onClick={() => props.setCheckedOut(false)}>Exit</button>
            </footer>
          </div>
          :
          <div className="content"><p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to you.</p></div> }
            
   
          </div>


        </div>
    </div>
}