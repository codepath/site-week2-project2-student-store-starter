import * as React from "react";

export default function CheckoutForm({
  checkout,
  setCheckout,
  email,
  name,
  shoppingCart,
  subtotal,
  total,
}) {
  function handleSubmit() {
    setCheckout(false);
  }
  return (
        <>
          <span style={{ fontWeight: "bold", fontSize: "large" }}>
            {" "}
            Receipt
          </span>
          <div style={{ border: "solid white", padding: "10px" }}>
            <p>
              Showing receipt for {name} available at {email}:
            </p>
            {shoppingCart?.map((cart) => {
              return (
                <p>
                  &bull; {cart.quantity} total {cart.product} purchased at a
                  cost of ${cart.unit_price.toFixed(2)} for a total cost of $
                  {cart.cost.toFixed(2)}
                </p>
              );
            })}

            <p> &bull;Before taxes, the subtotal was ${subtotal.toFixed(2)}</p>
            <p>
              &bull;After taxes and fees were applied, the total comes out to $
              {total.toFixed(2)}
              <button className="sc-button" onClick={handleSubmit}>
                Shop More
              </button>
              <button
                style={{ marginRight: "3px" }}
                className="sc-button"
                onClick={handleSubmit}
              >
                Exit
              </button>
            </p>
          </div>
    </>
  );
}
