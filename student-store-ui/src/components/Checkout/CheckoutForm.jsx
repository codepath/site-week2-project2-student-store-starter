import * as React from "react";
import CheckoutIcon from "remixicon-react/CheckboxCircleFillIcon";
import "./CheckoutForm.css";

export default function CheckoutForm({
  email,
  name,
  checkout,
  setCheckout,
  shoppingCart,
  subtotal,
  total,
}) {
  return (
    <>
      <div className="checkout">
        <span>
          <h3 className="check-text">Checkout Info</h3>
          <CheckoutIcon />
        </span>
        <div className="receipt">
        <p>
          Showing receipt for {name} available at {email}.
        </p>
        {shoppingCart.map((cartinfo) => {
          return (
            <p>
              &bull; {cartinfo.quantity} total {cartinfo.product} purchased at a
              cost of {cartinfo.unit_price} for a total cost of {cartinfo.cost}
            </p>
          );
        })}
        <p>&bull; Before taxes, the subtotal was {subtotal}</p>
        <p>
          &bull;After taxes and fees were applied, the total comes out to{" "}
          {total.toFixed(2)}
        </p>
        </div>
      </div>
    </>
  );
}
