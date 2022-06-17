import * as React from "react"
import "./ShoppingCart.css"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function ShoppingCart() {
    return (
        <div className="shopping-cart">
            <span className="cart-icons">
                <i class="fa-solid fa-cart-plus side-icon"></i>
                <i class="fa-solid fa-sack-dollar side-icon"></i>
                <i class="fa-solid fa-list-check side-icon"></i>
            </span>
            {/* <div className="open">
                <h3>Shopping Cart<i class="fa-solid fa-cart-plus side-icon"></i></h3>
                <div className="notification">
                    No items added to cart yet. Start shoppping now!
                </div>
                <CheckoutForm />
                <CheckoutInfo />
            </div> */}
        </div>
    )
}

export function CheckoutInfo() {
    if(false) {
        return (
            <div className="checkout-success">
                <h3>Checkout Info<i class="fa-solid fa-list-check side-icon"></i></h3>
                <div className="content">
                    <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the
                    order, it will be delivered to your dorm room.</p>
                    
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="checkout-success">
                <h3>Checkout Info<i class="fa-solid fa-list-check side-icon"></i></h3>
                <div className="card">
                    <header className="card-head">
                        <h4 className="card-title">Receipt</h4>
                    </header>
                    <section className="card-body">
                        <p className="header">Showing receipt for {1} available at {2}:</p>
                        <ul className="purchase">

                        </ul>
                    </section>
                    <footer className="card-foot">
                        <button className="button">Shop More</button>
                        <button className="button">Exit</button>
                    </footer>
                </div>
            </div>
        )
    }
}
