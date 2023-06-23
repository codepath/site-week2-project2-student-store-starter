import * as React from "react"
import "./ShoppingCart.css"
import { useState } from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function ShoppingCart({cartItems, setCartItems, allItemSubtotal}) {
    {cartItems?.map((item) => (allItemSubtotal += item.subtotal))}
    const allItemTaxes = allItemSubtotal * .0875
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [showCheckout, setShowCheckout] = useState(false)

    const handleClick = event => {
      setShowCheckout(true);
    };

    function resetCart() {
      setCartItems([])
      setName('')
      setEmail('')
      setShowCheckout(false)
      {cartItems?.map((item) => (
        item.quantity = 0
      ))}
    }

  function checkoutSuccess() {
    if (cartItems.length === 0){
      return(
        <div class="is-danger">No cart or items in cart found to checkout.</div>
      )
     }
     else{
    return(
      <div class="card">
    <header class="card-head">
      <h4 class="card-title">Receipt</h4>
    </header>
    <section class="card-body">
      <p class="header">Showing receipt for {name} available at {email}</p>
      <ul class="purchase">
      {cartItems?.map((item) => (
      <li>🔸 {item.quantity} total {item.name} purchased at a cost of ${item.price.toFixed(2)} for a 
                total cost of  ${item.subtotal.toFixed(2)}</li>
            ))}
      <li>🔸 Before taxes, the subtotal was ${allItemSubtotal.toFixed(2)} </li>
      <li>🔸 After taxes and fees were applied, the total comes out to ${(allItemSubtotal + allItemTaxes).toFixed(2)}</li>
      </ul>
    </section>
    <footer class="card-foot">
      <button class="button is-success" onClick={handleClick}>Shop More</button>
      <button class="button" onClick={function(event){ resetCart(); handleClick()}} >Exit</button>
    </footer>
  </div>  )
  }
  }

  function checkout() {
    return(
      <>
    <div class="checkout-form">  
  <div class="input-field">
    <label class="label">Name</label>
    <div class="control">
      <input name="name" class="checkout-form-input" type="text" value={name} placeholder="Student Name" onChange={event => {
          setName(event.target.value)}}></input>
    </div>
  </div>
  
  <div class="input-field">
    <label class="label">Email</label>
    <div class="control">
      <input name="email" class="checkout-form-input" value={email} type="email" placeholder="student@codepath.org" onChange={event => {
          setEmail(event.target.value)}}></input>
    </div>
  </div>
  
  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input name="termsAndConditions" type="checkbox"></input>
        <span class="label">I agree to the <a href="#terms-and-conditions">terms and conditions</a></span>
      </label>
    </div>
  </div>
  
  <div class="field">
  <div class="control">
  <button class="button checkout-button" onClick={handleClick}>Checkout</button>
  {showCheckout ? (
    checkoutSuccess()
  ) : (
    <div class="checkout-success">
      <h3>Checkout Info</h3>
      <div class="notification">
        A confirmation email will be sent to you so that you can confirm this order. 
        Once you have confirmed the order, it will be delivered to your dorm room.
      </div>
    </div>
  )}
  <button class="button checkout-button" onClick={resetCart}>Clear Cart</button>
  
    </div>
  </div>
</div> 
</>
)
  }

 

  if (cartItems.length !== 0){
    return (
      <>
      <h3 className="">Shopping Cart</h3>
      <div className="shopping-cart">
    <div className="CartTable">
      <div className="open">
      <div className="header">
        <div className="header-row">
          <span className="flex-2">Name</span>
          <span className="center">Quantity</span>
          <span className="center">Unit Price</span>
          <span className="center">Cost</span>
        </div>
        {cartItems?.map((item) => (
              <div className="product-row" key={item.id}>
                <span className="flex-2 cart-product-name">{item.name}</span>
                <span className="center cart-product-quantity">{item.quantity}</span>
                <span className="center cart-product-price">${item.price.toFixed(2)}</span>
                <span className="center cart-product-subtotal">
                  ${item.subtotal.toFixed(2)}
                </span>
              </div>
            ))}
      </div>

    <div className="receipt">
      <div className="receipt-subtotal">
        <span className="label">Subtotal</span>
        <span></span>
        <span></span>
        <span className="center subtotal">${allItemSubtotal.toFixed(2)}</span>
      </div>
      <div className="receipt-taxes">
        <span className="label">Taxes and Fees</span>
        <span></span>
        <span></span>
        <span className="center">${allItemTaxes.toFixed(2)}</span>
      </div>
      <div className="receipt-total">
        <span className="label">Total</span>
        <span></span>
        <span></span>
        <span className="center total-price">${(allItemSubtotal + allItemTaxes).toFixed(2)}</span>
      </div>
    </div>
  </div>
  </div>
  </div>
    {checkout()}
  </>
  )
}
  else {
    return (
      <><h3 className="">Shopping Cart</h3>
      <div class="notification">No items added to cart yet. Start shopping now!</div>
      {checkout()}
      </>
      
    )
  }
}