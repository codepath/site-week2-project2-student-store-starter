import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm( { isOpen=false, shoppingCart=[], checkoutForm={email:"", name:""}, handleOnCheckoutFormChange=()=>{}, handleOnSubmitCheckoutForm=()=>{}, checkoutMessage="", purchaseOrder={}, setPurchaseOrder=()=>{} } ) {

  // function to reset the checkout info, passed down to CheckoutInfo component
  function handleExitCurrentPurchase() {
    setPurchaseOrder({})
  }
    
  if (!isOpen) {
    return null;
  }

  return (
    <div className="checkout-form">
      <div className="checkout-form-inputs">
        <input className="checkout-form-input" type="text" name="name" placeholder="Student Name" value={checkoutForm.name}
                onChange={(evt) => handleOnCheckoutFormChange("name", evt.target.value)} />
        <input className="checkout-form-input" type="email" name="email" placeholder="student@codepath.org" value={checkoutForm.email}
                onChange={(evt) => handleOnCheckoutFormChange("email", evt.target.value)} />
      </div>
      {checkoutMessage && checkoutMessage!="Success!" ? <p className="error">{checkoutMessage}</p> : null}
      <button className="checkout-button" onClick={handleOnSubmitCheckoutForm}>Checkout</button>
      <CheckoutInfo
        purchaseOrder={purchaseOrder}
        handleExitCurrentPurchase={handleExitCurrentPurchase}
        checkoutMessage={checkoutMessage}/>
    </div>
  )
}

export function CheckoutInfo( {purchaseOrder={}, handleExitCurrentPurchase=()=>{}, checkoutMessage="" } ) {
  if (checkoutMessage==="Success!" && purchaseOrder?.receipt) {
    return (
      <div className="checkout-info">
        <p className="success">Success!</p>
        <div className="receipt">
          <p>Showing receipt for {purchaseOrder?.name} available at {purchaseOrder?.email}</p>
        </div>
        <ul className="receipt-list"> 
          {purchaseOrder.receipt.map((receiptEntry, index) => {
            return <li key={index}>{receiptEntry}</li>
          })}
        </ul>
        
        <button className="exit-purchase-button" onClick={handleExitCurrentPurchase}>Exit</button>

      </div>
    )
  } else {
  return (
    <div className="checkout-info">
      <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>
    </div>
  )}
}