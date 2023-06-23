import * as React from "react"
import "./Receipt.css"
import { useState } from "react";


export default function Receipt({shoppingCart, setShoppingCart, checkoutName, checkoutEmail, calculateTaxes, calculateTotal, checkoutProducts}) {


    return (
        <div className="checkout-success">
                    
        <h3>Checkout Info <span className="icon button"><i className="material-icons md-48">fact_check</i></span>
        </h3>
        
        <div className="card">
            <header className="card-head">
                <h4 className="card-title">💵 Receipt 🤑</h4>
            </header>
            
            <section className="card-body">
                <p className="header">Showing receipt for {checkoutName} available at {checkoutEmail}:</p>
                {checkoutProducts?.map(item =>{ 

                    const productSubtotal = (item.price * item.quantity).toFixed(2);
                    return (
                <ul className="purchase">
                    <li>{item.quantity} total {item.name} purchased at a cost of ${item.price} for a total cost of ${productSubtotal}.</li>
                </ul>
                )})}
                
                <p>After taxes and fees were applied, the total comes out to ${
                    calculateTotal(
                                    checkoutProducts.reduce((acc, item) => acc + item.price * item.quantity, 0),
                                    calculateTaxes(checkoutProducts.reduce((acc, item) => acc + item.price * item.quantity, 0))
                                    ).toFixed(2)}
                </p>
            </section>
        </div>
        </div>
    )}