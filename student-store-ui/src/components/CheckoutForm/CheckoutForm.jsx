import * as React from "react";
import { useEffect, useState } from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({
  email,
  name,
  receiptCart,
  products,
  setCheckout,
}) {
  let product = receiptCart.shoppingCart.map((cart) => {
    return products.filter((product) => {
      return product.id === cart.id;
    });
  });
  console.log(product);
  return (
    <div className="checkout-success">
      <div className="card">
        <header className="card-head">
          <h4 className="card-title">Receipt</h4>
        </header>
        <section className="card-body">
          <p className="header">
            {`Showing receipt for ${name} available at ${email}:`}
          </p>
          {product?.map((cartinfo) => {
            const matchingItems = receiptCart.shoppingCart.filter(
              (scart) => scart.id === cartinfo[0].id
            );

            return matchingItems.map((scart) => (
              <p key={scart.id}>
                &bull; {scart.quantity} total {cartinfo[0].name} purchased at a
                cost of ${cartinfo[0].price} for a total cost of $
                {(scart.quantity * cartinfo[0].price).toFixed(2)}
              </p>
            ));
          })}

          <ul className="purchase">
            <li>
              Before taxes, the subtotal was ${receiptCart.subtotal.toFixed(2)}
            </li>
            <li>
              After taxes and fees were applied, the total comes out to $
              {receiptCart.total.toFixed(2)}
            </li>
          </ul>
        </section>
        <footer className="card-foot">
          <button
            onClick={(e) => {
              e.preventDefault();
              setCheckout(false);
            }}
            className="button is-success"
          >
            Shop More
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCheckout(false);
            }}
            className="button"
          >
            Exit
          </button>
        </footer>
      </div>
    </div>
  );
}
