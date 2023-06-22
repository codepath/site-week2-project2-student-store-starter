import * as React from "react";
import "./CheckoutForm.css";


export default function CheckoutForm({checkoutSubmitted}) {
    if (!checkoutSubmitted) {
        return (
            <div className="checkout-success">
            <h3>
                Checkout Info
                <span className="icon button">
                <i className="material-icons md-48">fact_check</i>
                </span>
            </h3>
            <div className="content">
                <p>
                A confirmation email will be sent to you so that you can confirm this
                order. Once you have confirmed the order, it will be delivered to your
                dorm room.
                </p>
            </div>
            </div>
        );
    } else { // checkout form has been submitted
        return (
            <div className="checkout-success">
                <h3>Checkout Info 
                    <span className="icon button">
                        <i className="material-icons md-48">fact_check</i>
                    </span>
                </h3>
                <div className="card">
                    <header className="card-head">
                        <h4 className="card-title">Receipt</h4>
                    </header>
                    <section className="card-body">
                        <p className="header">Showing receipt for nya available at nye:</p>
                        <ul className="purchase">
                            
                            <li>1 total Cinnamon Rolls purchased at a cost of $2.99 for a total cost of $2.99.</li>
                            <li>1 total Coconut Water purchased at a cost of $3.25 for a total cost of $3.25.</li>
                            <li>1 total Striped Socks purchased at a cost of $4.99 for a total cost of $4.99.</li>
                            <li>Before taxes, the subtotal was $11.23</li>
                            <li>After taxes and fees were applied, the total comes out to $12.22</li>
                        </ul>
                    </section>
                    <footer className="card-foot">
                        <button className="button is-success">Shop More</button>
                        <button className="button">Exit</button>
                    </footer>
                </div>
            </div>

        )
    }
}