import * as React from "react";
import axios from "axios";

export default function CheckoutForm({
  handleSidebarToggle,
  shoppingCart,
  setShoppingCart,
}) {
  const [checkoutForm, setCheckoutForm] = React.useState({
    name: "",
    email: "",
  });
  const [termsAndConditions, setTermsAndConditions] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [receiptItems, setReceiptItems] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [isCheckoutSuccessful, setIsCheckoutSuccessful] = React.useState(false);

  const handleOnSubmitCheckoutForm = (event) => {
    event.preventDefault();
    setIsCheckoutSuccessful(false);

    if (!checkoutForm.name || !checkoutForm.email) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    if (!termsAndConditions) {
      setErrorMessage(
        "You must agree to the terms and conditions before checking out."
      );
      return;
    }

    if (shoppingCart.length === 0) {
      setErrorMessage(
        "Your shopping cart is empty. Add some products before checking out."
      );
      return;
    }

    setErrorMessage(""); // Clear any previous errors
    setIsCheckoutSuccessful(true);
    sendCartDataToServer();

    setReceiptItems([...shoppingCart]);

    setShoppingCart([]);
  };

  /// end of handleOnSubmitCheckout

  const handleOnCheckoutFormChange = (event) => {
    setCheckoutForm({
      ...checkoutForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleTermsAndConditionsChange = (event) => {
    setTermsAndConditions(event.target.checked);
  };

  const sendCartDataToServer = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/checkout",
        shoppingCart
      );
      setTotal(response.data.total);
      setReceiptItems(response.data.receiptItems);
    } catch (error) {
      console.error(error);
    }
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
              value={checkoutForm.name}
              onChange={handleOnCheckoutFormChange}
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
              value={checkoutForm.email}
              onChange={handleOnCheckoutFormChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                name="termsAndConditions"
                type="checkbox"
                onClick={handleTermsAndConditionsChange}
              />
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
            <button
              className="button checkout-button"
              onClick={handleOnSubmitCheckoutForm}
            >
              Checkout
            </button>
          </div>
          <p className="is-danger">{errorMessage}</p>
        </div>
      </div>
      {isCheckoutSuccessful && (
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
                Showing receipt for {checkoutForm.name} available at{" "}
                {checkoutForm.email}:
              </p>
              <ul className="purchase">
                {receiptItems.map((item) => (
                  <li key={item.productId}>
                    {item.quantity} total {item.name} purchased at a cost of $
                    {item.price} for a total cost of $
                    {(item.quantity * item.price).toFixed(2)}
                  </li>
                ))}
                <li>Before taxes, the subtotal was ${total.toFixed(2)}</li>
                <li>
                  After taxes, the total comes out to $
                  {(total * 1.0875).toFixed(2)}
                </li>
              </ul>
            </section>

            <footer className="card-foot">
              <button className="button is-success">Shop More</button>
              <button className="button">Exit</button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
