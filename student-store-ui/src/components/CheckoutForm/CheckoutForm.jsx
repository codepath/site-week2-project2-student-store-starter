import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({
  checkoutSubmitted,
  products,
  receiptName,
  receiptEmail,
  handleShopMore,
  order,
  receiptSubtotal,
  receiptTotalPrice,
}) {

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
    if (order !== []) {
      // checkout only if there are items in the cart
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
                Showing receipt for {receiptName} available at {receiptEmail}:
              </p>
              <ul className="purchase">
                {/* {console.log("THIS IS AN ORDER: ", order)} */}
                {order.map((item, i) => (
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
                    {" $" +
                      (item.quantity *
                        products.filter(
                          (product) => item.itemId === product.id
                        )[0].price).toFixed(2)}
                  </li>
                ))}
                <li>
                  Before taxes, the subtotal was{" "}
                  {receiptSubtotal.toLocaleString("us-EN", {
                    style: "currency",
                    currency: "USD",
                  })}
                </li>
                <li>
                  After taxes and fees were applied, the total comes out to{" "}
                  {receiptTotalPrice}
                </li>
              </ul>
            </section>
            <footer className="card-foot">
              <button className="button is-success" onClick={handleShopMore}>
                Shop More
              </button>
              <button className="button" onClick={handleShopMore}>
                Exit
              </button>
            </footer>
          </div>
        </div>
      );
    }
  }
}
