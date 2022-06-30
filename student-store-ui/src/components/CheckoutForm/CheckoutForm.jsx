import * as React from "react"


export default function CheckoutForm(props) {
  return (
    <div className="checkout-form">
      <div className="input-field">
        <label className="label">Name</label>
        <div className="control">
          <input className="checkout-form-input" type="text" name="name" placeholder="Student Name" value={props.checkoutForm.name} onChange={(e) => {props.handleCheckoutFormChange(e.target.name, e.target.value)}}></input>

        </div>
      </div>

      <div className="input-field">
        <label className="label">Email</label>
        <div className="control">
          <input className="checkout-form-input" type="email" name="email" placeholder="student@codepath.org" value={props.checkoutForm.email} onChange={(e) => {props.handleCheckoutFormChange(e.target.name, e.target.value)}}></input>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button className="checkout-button" onClick={props.handleOnSubmitCheckoutForm}>Checkout</button>
        </div>
      </div>
      {props.success?
      <div className="checkout-success">
        <div className="card">
          <header className="card-head">
            <h4 className="card-title">Receipt</h4>
          </header>
          <section className="card-body">
            <p className="header">
              Showing receipt for {props.receiptName} available at {props.receiptEmail}:
            </p>
            <ul className="purchase">
              <li>
                After taxes and fees were applied, the total comes out to ${(props.receiptTotal)}
              </li>
            </ul>
          </section>
        </div>
      </div>
      :null}
      
    </div>
  )
}