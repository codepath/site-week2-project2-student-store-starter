import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Cart from "../../Cart/Cart";

export default function SidebarActive({
  cartItems,
  products,
  itemsOnCart,
  setItemsOnCart,
}) {
  useEffect(() => {
    setItemsOnCart(Object.keys(cartItems)?.length > 0);
  }, [cartItems]);

  Object.values(cartItems).every((e) => e === 0) ? (
    setItemsOnCart(false)
  ) : (
    <></>
  );

  const [total, setTotal] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [taxes, setTaxes] = useState("");
  const [formStudentName, setFormStudentName] = useState({
    studentName: "",
  });
  const [formStudentEmail, setFormStudentEmail] = useState({
    studentEmail: "",
  });
  const [receiptActive, setReceiptActive] = useState(false);

  function handleInputEmail(event) {
    setFormStudentEmail({
      ...formStudentEmail,
      [event.target.name]: event.target.value,
    });
  }

  function handleInputName(event) {
    setFormStudentName({
      ...formStudentName,
      [event.target.name]: event.target.value,
    });
  }

  const myReceipt = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/checkout",
        cartItems
      );
      setTotal(response.data.total);
      setSubtotal(response.data.subtotal);
      setTaxes(response.data.taxes);
    } catch (error) {
      console.log(error);
    }
  };

  function handleCheckout() {
    !formStudentName.studentName || !formStudentEmail.studentEmail
      ? setReceiptActive(false)
      : (myReceipt(), setReceiptActive(true));
  }

  function handleExit(){
    setReceiptActive(false)
    formStudentName.studentName = ''
    formStudentEmail.studentEmail = ''
    setItemsOnCart(false)

  }

  function renderReceipt() {
    return (
      <>
        <div className="checkout-success">
          <h3>
            Checkout Info{" "}
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
                Showing receipt for {formStudentName.studentName} available at{" "}
                {formStudentEmail.studentEmail}:
              </p>
              <ul className="purchase">
                {products?.map((product) =>
                  product.id in cartItems ? (
                    <li>
                      {cartItems[product.id]} total {product.name} purchased at
                      a cost of ${product.price.toFixed(2)} for a total cost of
                      ${(product.price * cartItems[product.id]).toFixed(2)}.
                    </li>
                  ) : (
                    <></>
                  )
                )}
                <li>Before taxes, the subtotal was ${subtotal}</li>
                <li>
                  After taxes and fees were applied, the total comes out to ${total}
                </li>
              </ul>
            </section>
            <button className="checkout-button" onClick={handleExit}>Exit</button>
          </div>
        </div>
      </>
    );
  }

  function noReceipt() {
    return (
      <>
        <div className="content">
          <h3>
            Checkout Info{" "}
            <span className="icon button">
              <i className="material-icons md-48">fact_check</i>
            </span>
          </h3>
          <p>
            A confirmation email will be sent to you so that you can confirm
            this order. Once you have confirmed the order, it will be delivered
            to your dorm room.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="shopping-cart">
        <div className="open">
          <h3>
            Shopping Cart
            <span className="button">
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>
          </h3>

          {itemsOnCart ? (
            <Cart cartItems={cartItems} products={products} />
          ) : (
            <div className="notification">
              {" "}
              No items added to cart yet. Start shopping now!
            </div>
          )}

          <div className="checkout-form">
            <h3>
              Payment Info
              <span className="button">
                <i className="material-icons md-48">monetization_on</i>
              </span>
            </h3>
            <div className="input-field">
              <label className="label">Name</label>
              <div className="control ">
                <input
                  name="studentName"
                  className="checkout-form-input"
                  type="text"
                  placeholder="Student Name"
                  onChange={handleInputName}
                  value={formStudentName.studentName}
                ></input>
              </div>
            </div>
            <div className="input-field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  name="studentEmail"
                  className="checkout-form-input"
                  type="email"
                  placeholder="student@codepath.org"
                  onChange={handleInputEmail}
                  value={formStudentEmail.studentEmail}
                ></input>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input name="termsAndConditions" type="checkbox"></input>
                  <span className="label">
                    I agree to the{" "}
                    <a href="#terms-and-conditions">terms and conditions</a>
                  </span>
                </label>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="checkout-button" onClick={handleCheckout}>
                  Checkout
                </button>
                {receiptActive ? renderReceipt() : noReceipt()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
