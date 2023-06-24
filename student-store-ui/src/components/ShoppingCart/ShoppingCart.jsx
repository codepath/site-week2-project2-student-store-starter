import * as React from "react";
import ShoppingIcon from "remixicon-react/ShoppingBasket2FillIcon";
import "./ShoppingCart.css";
import { useEffect } from "react";
import PaymentIcon from "remixicon-react/MoneyDollarCircleFillIcon";

export default function ShoppingCart({
  email,
  setEmail,
  name,
  setName,
  subtotal,
  setSubtotal,
  total,
  setTotal,
  taxes,
  setTaxes,
  setShoppingCart,
  shoppingCart,
  setCheckout,
}) {
  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleCheckout = (event) => {
    setCheckout(true);
  };

  useEffect(() => {
    const calcSubtotal = () => {
      let newSubTotal = 0;
      shoppingCart?.forEach((cart) => {
        newSubTotal += cart.unit_price * cart.quantity;
      });
      setSubtotal(newSubTotal);
    };

    const calcTaxes = () => {
      const taxRate = 0.0875;
      const newTaxes = subtotal * taxRate;
      setTaxes(newTaxes);
    };

    const calcTotal = () => {
      const newTotal = subtotal + taxes;
      setTotal(newTotal);
    };

    calcSubtotal();
    calcTaxes();
    calcTotal();
  }, [shoppingCart, subtotal, taxes]);

  function emptyCart() {
    setShoppingCart([]);
    setCheckout(false);
  }
  ``;

  return (
    <>
      <h3>Shopping Cart</h3>
      <ShoppingIcon />
      {shoppingCart?.length === 0 ? (
        <div className="shop">
          <span></span>
          <p>No items added to cart yet. Start shopping now!</p>
        </div>
      ) : (
        <>
          <table>
            <thead>
              <tr className="shopCartItems">
                <th className="sc-header">Name</th>
                <th className="sc-header">Quantity</th>
                <th className="sc-header">Unit Price</th>
                <th className="sc-header">Cost</th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart?.map((cart) => {
                return (
                  <tr className="shopCartItems">
                    <td className="sc-item">{cart.product}</td>
                    <td className="sc-item">{cart.quantity}</td>
                    <td className="sc-item">{cart.unit_price.toFixed(2)}</td>
                    <td className="sc-item"> ${cart.cost.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <br />
          <div id="checkout">
            <div
              style={{
                marginLeft: "8px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Subtotal: <span className="prices">${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ marginLeft: "8px", marginBottom: "10px" }}>
              Taxes and Fees:{" "}
              <span className="prices">${taxes.toFixed(2)}</span>
            </div>
            <div
              style={{ marginLeft: "8px", marginBottom: "10px" }}
              id="checkoutHeader"
            >
              {" "}
              Total: <span className="prices">${total.toFixed(2)}</span>
            </div>
          </div>
          <button id="sc-button" onClick={emptyCart}>
            {" "}
            Clear Cart
          </button>
        </>
      )}
      <div className="payment">
        <span>
          <h3>Payment Info</h3>
          <PaymentIcon />
        </span>
        <label className="form-label" htmlFor="name">
          Name:
        </label>
        <input
          value={name}
          onChange={handleName}
          className="form-input"
          name="student-name"
          placeholder="Student Name"
          required=""
        />{" "}
        <br></br>
        <label className="form-label" htmlFor="password">
          Email:
        </label>
        <input
          value={email}
          onChange={handleEmail}
          className="form-input"
          name="student-name"
          placeholder="Student@codepath.org"
          required
        />
        <input type="checkbox" required />
        <label className="checkbox-input">
          I agree to the terms and conditions
        </label>
        <br></br>
        <button id="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </>
  );
}
