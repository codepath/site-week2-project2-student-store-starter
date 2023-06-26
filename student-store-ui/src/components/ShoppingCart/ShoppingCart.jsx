import React from "react";
import { useState } from "react";
import "./ShoppingCart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
const ShoppingCart = ({ isOpen, products, shoppingCart }) => {
  const [novalueInShoppingCart, setNoValueInShoppingCart] = useState(true);
  const [productValues, setProductValues] = useState([]);
  // const [name, getName] = useState("");
  const [itemId, setItemId] = useState(0);
  const [productId, setProductId] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [cost, setCost] = useState(0);
  const [checkout, setCheckout] = useState(true);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [checkOutRecipt, setCheckoutRecipt] = useState([]);
  const [sendSubTotal, setSendSubTotal] = useState(0);
  const [subPlusTaxesAndFees, setSubPluseTaxesAndFees] = useState(0);
  const [ftotal, setFTotal] = useState(0);

  let subtotal = 0;
  let subplustaxesAndFees = 0;
  let total = 0;
  // console.log("product", products);
  // console.log("itemid", itemId);

  console.log(shoppingCart.length);

  const handleClick = (e) => {
    setCheckout(false);
    let checkOutRecipt = [...shoppingCart];
    setCheckoutRecipt(checkOutRecipt);
    shoppingCart.splice(0, shoppingCart.length);
    console.log("shoppingcart", shoppingCart);
    setSendSubTotal(subtotal);
    setSubPluseTaxesAndFees(subplustaxesAndFees);
    setFTotal(total);
  };
  const handleNameChange = (e) => {
    setBuyerName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setBuyerEmail(e.target.value);
  };

  return (
    <>
      {/* //if the add button is pressed, then it should remove the no items added
      to cart yet */}
      <h3>Shopping Cart</h3>
      {/* {novalueInShoppingCart && (
        <p>No items added to cart yet. Start shopping now!</p>
      )} */}
      {shoppingCart.length <= 0 ? (
        <div>No items added to cart yet</div>
      ) : (
        <table>
          <h2>{"Name|Quantity|Unit Price|Cost"}</h2>
        </table>
      )}

      <div className="MyTable-Tr">
        {console.log(shoppingCart.length)}
        {shoppingCart.map((item) => {
          console.log(item.itemId - 1);
          subtotal = subtotal + products[item.itemId - 1].price * item.quantity;
          subplustaxesAndFees = subtotal * 0.07;
          total = subtotal + subplustaxesAndFees;
          return (
            <p className={itemId}>
              {products[item.itemId - 1].name},{"  "} {item.quantity} ,
              {products[item.itemId - 1].price},{" "}
              {products[item.itemId - 1].price * item.quantity}
            </p>
          );
        })}
      </div>

      {shoppingCart.length > 0 ? (
        <div>
          <p>Subtotal: {subtotal}</p>
        </div>
      ) : null}

      {shoppingCart.length > 0 ? (
        <p>
          Taxes and Fees:{" "}
          {(Math.round(subplustaxesAndFees * 100) / 100).toFixed(2)}
        </p>
      ) : null}
      {shoppingCart.length > 0 ? (
        <p>Total:{(Math.round(total * 100) / 100).toFixed(2)}</p>
      ) : null}
      {/* {shoppingCart.length > 0 ? { subtotal } : null} */}

      {/* {!shoppingCart.length ? <p>{subtotal}</p> : " "} */}

      <h3>Payment Info</h3>
      <form>
        <label>Name</label>
        <input
          onChange={handleNameChange}
          type="text"
          id="name"
          name="name"
          value={buyerName}
        ></input>
        <label>Email</label>
        <input
          onChange={handleEmailChange}
          type="text"
          id="email"
          name="email"
          value={buyerEmail}
        ></input>
      </form>
      <input type="checkbox" id="verified" value="read" />
      <label for="verified">
        I agree to the <a>terms and conditions</a>
      </label>
      <button onClick={handleClick} className="checkout-btn">
        Checkout
      </button>
      <h2>Checkout Info</h2>
      <p>Receipt</p>
      {checkout ? (
        <p>
          A confirmation email will be sent to you so that you can confirm this
          order. Once you have confirmed the order, it will be delivered to your
          dorm room.
        </p>
      ) : (
        <>
          <CheckoutForm
            ftotal={ftotal}
            subplustaxesAndFees={subplustaxesAndFees}
            sendSubTotal={sendSubTotal}
            products={products}
            checkOutRecipt={checkOutRecipt}
            handleClick={handleClick}
            buyerName={buyerName}
            buyerEmail={buyerEmail}
            shoppingCart={shoppingCart}
          />
        </>
      )}
    </>
  );
};

export default ShoppingCart;
