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
  const [selectedState, setSelectedState] = useState("");

  const stateTaxRates = {
    Alabama: 0.04,
    Alaska: 0,
    Arizona: 0.056,
    Arkansas: 0.065,
    California: 0.0725,
    Colorado: 0.029,
    Connecticut: 0.0635,
    Delaware: 0,
    Florida: 0.06,
    Georgia: 0.04,
    Hawaii: 0.045,
    Idaho: 0.06,
    Illinois: 0.0625,
    Indiana: 0.07,
    Iowa: 0.06,
    Kansas: 0.065,
    Kentucky: 0.06,
    Louisiana: 0.05,
    Maine: 0.055,
    Maryland: 0.06,
    Massachusetts: 0.0625,
    Michigan: 0.06,
    Minnesota: 0.06875,
    Mississippi: 0.07,
    Missouri: 0.04225,
    Montana: 0,
    Nebraska: 0.055,
    Nevada: 0.0685,
    "New Hampshire": 0,
    "New Jersey": 0.06625,
    "New Mexico": 0.05125,
    "New York": 0.04,
    "North Carolina": 0.0475,
    "North Dakota": 0.05,
    Ohio: 0.0575,
    Oklahoma: 0.045,
    Oregon: 0,
    Pennsylvania: 0.06,
    "Rhode Island": 0.07,
    "South Carolina": 0.06,
    "South Dakota": 0.045,
    Tennessee: 0.07,
    Texas: 0.0625,
    Utah: 0.0485,
    Vermont: 0.06,
    Virginia: 0.053,
    Washington: 0.065,
    "West Virginia": 0.06,
    Wisconsin: 0.05,
    Wyoming: 0.04,
  };

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
        "http://localhost:3001/checkout",{
        cartItems: cartItems,
        stateTaxRates: stateTaxRates ,
        selectedState: selectedState
    });
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

  function handleExit() {
    setReceiptActive(false);
    formStudentName.studentName = "";
    formStudentEmail.studentEmail = "";
    setItemsOnCart(false);
    setSelectedState('Choose')
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
                  After taxes and fees were applied, the total comes out to $
                  {total}
                </li>
              </ul>
            </section>
            <button className="checkout-button" onClick={handleExit}>
              Exit
            </button>
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

  function handleStateChange(e) {
    setSelectedState(e.target.value);
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
            <Cart
              cartItems={cartItems}
              products={products}
              stateTaxRates={stateTaxRates}
              selectedState={selectedState}
            />
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
            <div className="input-field">
              <label className="label">Select your state</label>
              <select
                id="state-dropdown"
                value={selectedState}
                onChange={handleStateChange}
              >
                <option value="none">Choose</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </select>
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
