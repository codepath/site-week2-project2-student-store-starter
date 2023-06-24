import { useState } from "react";

export default function ShoppingCart({
  isOpen,
  products,
  shoppingCart,
  setShoppingCart,
}) {
  let subtotal = 0.0;
  {
    shoppingCart?.map((item) => (subtotal += item.price * item.quantity));
  }

  const [user, setuser] = useState("");
  const [emailUser, setemail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      user,
      emailUser,
    };
    console.log("hello", emailUser);
    setSubmittedData(formData);
  };

  return (
    <div className="shopping-cart">
      <div className="open">
        <h3>
          Shopping Cart
          <span className="button">
            <i className="material-icons md-48">add_shopping_cart</i>
          </span>
        </h3>
        <div className="notification">
          <p>
            <>
              <table className="itemTable">
                <thead>
                  <tr>
                    <th>Name </th>
                    <th>Quantity </th>
                    <th>Unit Price </th>
                    <th> Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {shoppingCart?.map((item, idx) => (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                      <td>{(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="purchaseCalculation">
                <div className="subtotal">
                  <h4>subtotal </h4>
                  <h4>{(subtotal * 1).toFixed(2)}</h4>
                </div>
                <div className="taxesFees">
                  <h4>Taxes </h4>
                  <h4>{(subtotal * 0.07).toFixed(2)}</h4>
                </div>
                <div className="totalFee">
                  <h4>Total </h4>
                  <h4>{(subtotal * 1.07).toFixed(2)}</h4>
                </div>
              </div>
            </>
          </p>
        </div>
        <form>
          <div className="checkout-form">
            <h3>
              Payment Info
              <span className="button">
                <i className="material-icons md-48">monetization_on</i>
              </span>
            </h3>
            <div className="input-field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  name="name"
                  className="checkout-form-input"
                  type="text"
                  placeholder="Student Name"
                  value={user}
                  onChange={(event) => setuser(event.target.value)}
                  required
                ></input>
              </div>
              <div className="input-field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    name="email"
                    className="checkout-form-input"
                    type="email"
                    placeholder="student@codepath.org"
                    value={emailUser}
                    onChange={(event) => setemail(event.target.value)}
                    required
                  ></input>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <span className="label">
                    <input name="termsAndConditions" type="checkbox"></input>I
                    agree to the
                    <a href="#terms-and-conditions"> terms and conditions</a>
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button
                  className="checkout-button"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </form>
        {submittedData && shoppingCart.length > 0 ? (
          <div className="Checkout">
            <h2>Checkout Info</h2>
            <h3>Receipt</h3>
            <p>
              Showing receipt for {user} available at {emailUser}:
            </p>
            {shoppingCart.map((item, rowIndex) => (
              <li>
                {" "}
                {item.quantity} total {item.name} at a cost of ${item.price} for
                a total cost of ${(item.quantity * item.price).toFixed(2)}
              </li>
            ))}
            {(setShoppingCart = [])}
            <li> Before taxes, the subtotal was {subtotal}</li>
            <li>
              {" "}
              After taxes and fees were applied, the total comes out to $
              {(subtotal * 1.07).toFixed(2)}
            </li>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
