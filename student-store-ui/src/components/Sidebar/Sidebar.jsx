import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({
  products,
  onToggle,
  isOpen,
  handleOnCheckoutFormChange,
  shoppingCart,
  handleOnSubmitCheckoutForm,
  checkoutSubmitted,
  handleCheckout,
  handleShopMore,
  nameTerm,
  emailTerm,
  setNameTerm,
  setEmailTerm,
  incorrectSubmission,
  acceptedTermsAndConditions,
  handleAcceptTermsAndConditions,
}) {
  function handleNameChange(event) {
    setNameTerm(event.target.value);
  }
  function handleEmailChange(event) {
    setEmailTerm(event.target.value);
  }
  let taxRate = 0.0875;
  let subtotalCalc = 0;
  shoppingCart.forEach((i) => {
    let specificItemId = i.itemId;
    let specificItemQuantity = i.quantity;
    subtotalCalc +=
      products.filter((product) => specificItemId === product.id)[0].price *
      specificItemQuantity;
  });

  let taxesAndFees = (subtotalCalc * taxRate).toLocaleString("us-EN", {
    style: "currency",
    currency: "USD",
  });

  let totalPrice = (subtotalCalc + subtotalCalc * taxRate).toLocaleString(
    "us-EN",
    {
      style: "currency",
      currency: "USD",
    }
  );

  if (isOpen) {
    return (
      <section className="sidebar open">
        <div className="wrapper">
          <button
            className="toggle-button button open"
            onClick={() => onToggle(!isOpen)}
          >
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <div className="shopping-cart">
            <div className="open">
              <h3 className="">
                Shopping Cart
                <span className="button">
                  <i className="material-icons md-48">add_shopping_cart</i>
                </span>
              </h3>

              <ShoppingCart
                key={2}
                isOpen={isOpen}
                products={products}
                shoppingCart={shoppingCart}
                taxesAndFees={taxesAndFees}
                totalPrice={totalPrice}
                subtotalCalc={subtotalCalc}
              ></ShoppingCart>

              <div className="checkout-form">
                <h3 className="">
                  Payment Info
                  <span className="button">
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
                      value={nameTerm}
                      onChange={handleNameChange}
                      onSubmit={handleOnSubmitCheckoutForm}
                    ></input>
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
                      value={emailTerm}
                      onChange={handleEmailChange}
                    ></input>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <input
                        name="termsAndConditions"
                        type="checkbox"
                        onChange={handleAcceptTermsAndConditions}
                      ></input>
                      <span className="label">
                        I agree to the{" "}
                        <a
                          href="#terms-and-conditions"
                          id="terms-and-conditions"
                        >
                          terms and conditions
                        </a>
                      </span>
                    </label>
                  </div>
                </div>

                <p className="is-danger">
                  {!acceptedTermsAndConditions
                    ? "You must first agree to our terms and conditions. "
                    : null}
                  <br></br>
                  {!shoppingCart || shoppingCart.length == 0
                    ? "No cart or items in cart found to checkout."
                    : null}
                </p>

                <div className="field">
                  <div className="control">
                    <button
                      className="button checkout-button"
                      onClick={handleCheckout}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>

              <CheckoutForm
                checkoutSubmitted={checkoutSubmitted}
                shoppingCart={shoppingCart}
                products={products}
                taxesAndFees={taxesAndFees}
                totalPrice={totalPrice}
                subtotalCalc={subtotalCalc}
                nameTerm={nameTerm}
                emailTerm={emailTerm}
                handleShopMore={handleShopMore}
              ></CheckoutForm>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="sidebar closed">
        <div className="wrapper">
          <button className="toggle-button button closed" onClick={onToggle}>
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <div className="shopping-cart">
            <div className="cart-icons">
              <span className="cart-icon icon button">
                <i
                  className="material-icons md-48"
                  onClick={() => onToggle(!isOpen)}
                >
                  add_shopping_cart
                </i>
              </span>
              <span className="cart-icon icon button">
                <i
                  className="material-icons md-48"
                  onClick={() => onToggle(!isOpen)}
                >
                  monetization_on
                </i>
              </span>
              <span className="cart-icon icon button">
                <i
                  className="material-icons md-48"
                  onClick={() => onToggle(!isOpen)}
                >
                  fact_check
                </i>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
