import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({ handleSidebarToggle }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [termsAndConditions, setTermsAndConditions] = React.useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTermsAndConditionsChange = (event) => {
    setTermsAndConditions(event.target.checked);
  };

  return (
    <div>
      <div className="checkout-form">
        <h3>
          Payment Info
          <span className="button" onClick={handleSidebarToggle}>
            <i className="material-icons md-48">monetization_on</i>
          </span>
        </h3>
        <div className="input-field">
          <label className="label">Name</label>
          <div className="control ">
            <input
              name="name"
              className="checkout-form-input"
              type="text"
              placeholder="Student Name"
              value=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="input-field">
          <label className="label">Email</label>
          <div className="control">
            <input
              name="email"
              className="checkout-form-input"
              type="email"
              placeholder="student@codepath.org"
              value=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input name="termsAndConditions" type="checkbox" />
              <span className="label">
                I agree to the{" "}
                <a href="#terms-and-conditions">terms and conditions</a>
              </span>
            </label>
          </div>
        </div>
        <p className="is-danger"></p>
        <div className="field">
          <div className="control">
            <button className="button checkout-button">Checkout</button>
          </div>
        </div>
      </div>
      <div className="checkout-success">
        <h3>
          Checkout Info{" "}
          <span className="icon button" onClick={handleSidebarToggle}>
            <i className="material-icons md-48">fact_check</i>
          </span>
        </h3>
        <div className="card">
          <header className="card-head">
            <h4 className="card-title">Receipt</h4>
          </header>
          <section className="card-body">
            <p className="header">
              Showing receipt for Nara Macias available at student:
            </p>
            <ul className="purchase">
              <li>
                7 total Flamin Hot Cheetos purchased at a cost of $1.50 for a
                total cost of $10.50.
              </li>
              <li>Before taxes, the subtotal was $10.50</li>
              <li>
                After taxes and fees were applied, the total comes out to $11.42
              </li>
            </ul>
          </section>
          <footer className="card-foot">
            <button className="button is-success">Shop More</button>
            <button className="button">Exit</button>
          </footer>
        </div>
      </div>
    </div>
  );
}
