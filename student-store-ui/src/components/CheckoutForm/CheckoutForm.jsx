import * as React from "react";
import "./CheckoutForm.css";
export default function CheckoutForm(props) {
  function handleSubmit() {
    props.setCheckout("normal");
  }
  return (
    <>
      {props.checkout === "purchase" ? (
        <>
          <span style={{ fontWeight: "bold", fontSize: "large" }}>
            {" "}
            Receipt
          </span>
          <div style={{ border: "solid white", padding: "10px" }}>
            <p>
              Showing receipt for {props.name} available at {props.email}:
            </p>
            {props.shoppingCart?.map((cart) => {
              return (
                <p>
                  &bull; {cart.quantity} total {cart.product} purchased at a
                  cost of ${cart.unit_price.toFixed(2)} for a total cost of $
                  {cart.cost.toFixed(2)}
                </p>
              );
            })}

            <p>
              {" "}
              &bull;Before taxes, the subtotal was ${props.subtotal.toFixed(2)}
            </p>
            <p>
              &bull;After taxes and fees were applied, the total comes out to $
              {props.total.toFixed(2)}
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
      ) : (
        <p style={{ fontSize: "large" }}>
          A confirmation email will be sent to you so that you can confirm this
          order. Once you have confirmed the order, it will be delivered to your
          dorm room.
        </p>
      )}
    </>
  );
}
