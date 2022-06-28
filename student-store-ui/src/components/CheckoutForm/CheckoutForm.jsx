import * as React from "react";


export default function CheckoutForm(props) {
  
  console.log(props.receipt);
  return (
    <div className="checkout-form">
      <div className="input-field">
        <label className="label">Name</label>
        <div className="control ">
          <input
             className="checkout-form-input"
             type="text"
             name="name"
             placeholder="name"
             value={props.CheckoutForm}
             onChange={props.handleCheckoutFormChange}
          />
        </div>
      </div>
      <div className="input-field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="checkout-form-input"
            type="email"
            name="email"
            placeholder="student@codepath.org"
            value={props.CheckoutForm}
            onChange={props.handleCheckoutFormChange}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button
            className="button checkout-button"
            onClick={props.handleOnSubmit}
          >
            Checkout
          </button>
        </div>
      </div>

      <div className="checkout-success">
        <div className="content">
          {props.success ? (
            <div className="card">
              <header className="card-head">
                <h4 className="card-title">Receipt</h4>
              </header>
              {
                <section className="card-body">
                  <p className="header">
                    Showing receipt for{" "}
                    {props.receipt[props.receipt.length - 1].name} available at{" "}
                    {props.receipt[props.receipt.length - 1].email}
                  </p>
                  <ul className="purchase">
                    {props.receipt[props.receipt.length - 1].order.map(
                      (product, idx) => {
                        return (
                          <li key={idx}>
                            {product.quantity} total{" "}
                            {props.products[product.itemId - 1].name} purchased
                            at a cost of $
                            {props.products[product.itemId - 1].price} for a
                            total cost of $
                            {(
                              product.quantity *
                              props.products[product.itemId - 1].price
                            ).toFixed(2)}
                          </li>
                        );
                      }
                    )}
                    <li>
                      After taxes and fees were applied, the total comes out to{" "}
                      {props.receipt[props.receipt.length - 1].total}
                    </li>
                  </ul>
                </section>
              }
              <footer className="card-foot">
                <button
                  className="button is-success"
                  onClick={() => {
                    props.setSuccess(false);
                  }}
                >
                  Shop More
                </button>
                <button
                  className="button"
                  onClick={() => {
                    props.setSuccess(false);
                  }}
                >
                  Exit
                </button>
              </footer>
            </div>
          ) : (
            <p>
             .
            </p>
          )}
        </div>
      </div>
    </div>
  );
}