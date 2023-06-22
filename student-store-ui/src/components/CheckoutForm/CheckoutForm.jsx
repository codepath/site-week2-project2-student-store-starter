import * as React from "react"
import "./CheckoutForm.css"
import { useState, useEffect } from "react"

export default function CheckoutForm({ shoppingCart, setShoppingCart }) {

    const [checkoutActive, setCheckoutActive] = useState(false)
    const [emailInput, setEmailInput] = useState('')
    const [nameInput, setNameInput] = useState('')
    const [namesForDisplay, setNameForDisplay] = useState('')
    const [emailForDisplay, setEmailForDisplay] = useState('')
    const [danger, setDanger] = useState(false)
    const [missingInput, setMissingInput] = useState(false)

    function handleCheckout() {
        if (shoppingCart.length === 0) {
          setDanger(true);
          setMissingInput(false);
        } else if (emailInput === '' || nameInput === '') {
          setDanger(false);
          setMissingInput(true);
        } else {
          setCheckoutActive(true);
          setNameForDisplay(nameInput);
          setEmailForDisplay(emailInput);
          setEmailInput('');
          setNameInput('');
          setDanger(false);
          setMissingInput(false);
          
        }
      }

    let errorItemQuantity =
        <>
            <p class="is-danger" >No cart or items in cart found to checkout.</p>
        </>
    let noError =

        <>
            <p class="is-danger" ></p>
        </>

    let errorMissingInfo =
    <>
    <p class="is-danger" >User info must include an email and name.</p>
    </>




    function handleExit() {
        setShoppingCart([]) // finish shopping and emptying the cart to new shop 
        setCheckoutActive(false)
    }

    function subtotal(shoppingCart) {
        return shoppingCart.reduce((sum, item) => {
            return (sum + (item.price * item.quantity))
        }, 0);

    }

    const handleNameInput = (e) => {
        setNameInput(nameInput => nameInput = e.target.value)


    }

    const handleEmailInput = (e) => {
        setEmailInput(emailInput => emailInput = e.target.value)


    }



    let beforeCheckout =

        <>
            <div className="content">
                <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the
                    order, it will be delivered to your dorm room.
                </p>
            </div>
        </>

    let checkoutReceipt =

        <>
            <div class="card">
                <header class="card-head">
                    <h4 class="card-title">Receipt</h4>
                </header>
                <section class="card-body">
                    <p class="header">Showing receipt for {namesForDisplay} available at {emailForDisplay}:</p>
                    <ul class="purchase">
                        {shoppingCart?.map((item) => {
                            if (item.quantity > 0) {
                                return (
                                    <li> {item.quantity} total {item.name} purchased at a cost of ${item.price.toFixed(2)} for a total cost of {(item.quantity * item.price).toFixed(2)}.</li>
                                );
                            }

                        })}

                        <li>Before taxes, the subtotal was ${subtotal(shoppingCart).toFixed(2)}</li>
                        <li>After taxes and fees were applied, the total comes out to ${(subtotal(shoppingCart) + subtotal(shoppingCart) * 0.08).toFixed(2)}</li>
                    </ul>
                </section>
                <footer class="card-foot"><button class="button" onClick={handleExit}>Exit</button></footer>
            </div>
        </>



    return (
        <>
            <div className="shopping-cart">
                <div className="checkout-form">
                    <h3 className="">Payment Info <span className="button"><i className="material-icons md-48">monetization_on</i></span></h3>
                    <div className="input-field">

                        <label className="label">Name</label>
                        <div className="control ">
                            <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" value={nameInput} onChange={handleNameInput} />
                        </div>
                    </div>
                    <div className="input-field">

                        <label className="label">Email</label>
                        <div className="control">
                            <input name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" value={emailInput} onChange={handleEmailInput} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control"><label className="checkbox"><input name="termsAndConditions" type="checkbox" /><span className="label" />I agree to the <a href="#terms-and-conditions">terms and conditions</a><span /></label></div>
                    </div>
                    {danger ? errorItemQuantity : noError}
                    {missingInput ? errorMissingInfo: noError}
                    <div className="field">
                        <div className="control"><button className="button checkout-button" onClick={handleCheckout}>Checkout</button></div>
                    </div>
                </div>
                <div className="checkout-success">
                    <h3>Checkout Info <span className="icon button"><i className="material-icons md-48">fact_check</i></span></h3>

                    {checkoutActive ? checkoutReceipt : beforeCheckout}

                </div>

            </div>

        </>


    )
}