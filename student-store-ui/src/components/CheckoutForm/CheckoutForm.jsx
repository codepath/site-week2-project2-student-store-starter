import * as React from "react";
import { useEffect, useState } from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({ email, name, subtotal, total, taxes, shoppingCart, products, setCheckout }) {
    let product = shoppingCart.map((cart) => {
        return products.filter((product) => {
            return product.id === cart.id;
        });
    });
    console.log(product)
  return (
    
    <div class="checkout-success">
    

      <div class="card">
        <header class="card-head">
          <h4 class="card-title">Receipt</h4>
        </header>
        <section class="card-body">
          <p class="header">
            {`Showing receipt for ${name} available at ${email}:`}
          </p>
          {product?.map((cartinfo) => {
  const matchingItems = shoppingCart.filter((scart) => scart.id === cartinfo[0].id);

  return matchingItems.map((scart) => (
    <p key={scart.id}>
      &bull; {scart.quantity} total {cartinfo[0].name} purchased at a cost of ${cartinfo[0].price} for a total cost of ${scart.quantity * cartinfo[0].price }
    </p>
  ));
})}
          
          <ul class="purchase">
            <li>Before taxes, the subtotal was ${subtotal.toFixed(2)}</li>
            <li>
              After taxes and fees were applied, the total comes out to ${total.toFixed(2)}
            </li>
          </ul>
        </section>
        <footer class="card-foot">
          <button onClick={(e) => {e.preventDefault() 
        setCheckout(false)}} class="button is-success">Shop More</button>
          <button onClick={(e) => {e.preventDefault() 
        setCheckout(false)}} class="button">Exit</button>
        </footer>
      </div>
    </div>
  );
}
