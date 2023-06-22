import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({
  checkoutSubmitted,
  shoppingCart,
  products,
  subtotalCalc,
  totalPrice,
  nameTerm,
  emailTerm,
  handleShopMore,
}) {
  let shoppingCartSubmitted = [...shoppingCart];
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
            A confirmation email will be sent to you so that you can confirm
            this order. Once you have confirmed the order, it will be delivered
            to your dorm room.
          </p>
        </div>
      </div>
    );
  } else {
    // checkout form has been submitted
    if (shoppingCart !== []) { // checkout only if there are items in the cart
      return (
        <div className="checkout-success">
          <h3>
            Checkout Info
            <span className="icon button">
              <i className="material-icons md-48">fact_check</i>
            </span>
          </h3>
          <div className="card">
            <header className="card-head">
              <h4 className="card-title">Receipt</h4>
            </header>
            <section className="card-body">
              <p className="header">
                Showing receipt for {nameTerm} available at {emailTerm}:
              </p>
              <ul className="purchase">
                {/* TODO: how to make the shopping cart data static here bc submitted already? */}
                {shoppingCartSubmitted.map((item) => (
                  <li>
                    {item.quantity} total
                    {" " +
                      products.filter(
                        (product) => item.itemId === product.id
                      )[0].name +
                      " "}
                    purchased at a cost of
                    {" " +
                      products
                        .filter((product) => item.itemId === product.id)[0]
                        .price.toLocaleString("us-EN", {
                          style: "currency",
                          currency: "USD",
                        }) +
                      " "}
                    for a total cost of
                    {" " +
                      item.quantity *
                        products.filter(
                          (product) => item.itemId === product.id
                        )[0].price}
                  </li>
                ))}
                <li>Before taxes, the subtotal was {subtotalCalc}</li>
                <li>
                  After taxes and fees were applied, the total comes out to{" "}
                  {totalPrice}
                </li>
              </ul>
            </section>
            <footer className="card-foot">
              <button className="button is-success" onClick={handleShopMore}>
                Shop More
              </button>
              <button className="button" onClick={handleShopMore}>Exit</button>
              {/* TODO: DO SOMETHING DIFFERENT ON EXIT? */}
            </footer>
          </div>
        </div>
      );
    }
  }
}
