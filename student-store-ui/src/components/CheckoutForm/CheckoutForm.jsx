import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm() {
  return (
    <div class="checkout-success">
      <h3>
        Checkout Info{" "}
        <span class="icon button">
          <i class="material-icons md-48">fact_check</i>
        </span>
      </h3>
      <div class="card">
        <header class="card-head">
          <h4 class="card-title">Receipt</h4>
        </header>
        <section class="card-body">
          <p class="header">
            Showing receipt for gghhbm j available at tom@codepath.org:
          </p>
          <ul class="purchase">
            <li>
              1 total Knitted Beanie purchased at a cost of $19.99 for a total
              cost of $19.99.
            </li>
            <li>Before taxes, the subtotal was $19.99</li>
            <li>
              After taxes and fees were applied, the total comes out to $21.74
            </li>
          </ul>
        </section>
        <footer class="card-foot">
          <button class="button is-success">Shop More</button>
          <button class="button">Exit</button>
        </footer>
      </div>
    </div>
  );
}
