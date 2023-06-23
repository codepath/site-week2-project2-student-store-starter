import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ShoppingCart.css";
import Receipt from "../Receipt/Receipt";

function ShoppingCart({ quantities, originalProducts }) {
  // console.log(originalProducts.find(product => (4 === product.id)))
  console.log("op", originalProducts);
  console.log("q", quantities);
  const addedToCart = Object.entries(quantities).filter(
    ([id, quantity]) => quantity > 0
  );
  // console.log('atc',addedToCart)
  // const [subTotal, setSubTotal] = useState(0)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cart, setCart] = useState([]);
  let subTotal = 0;
  const percentTax = 0.0875;
  // console.log('st', subTotal)
  const shoppingCart = [];
  const user = {};
  const [atCheckout, setAtCheckout] = useState(false);
  // const cartToPost= {shoppingCart:[], user}

  function handleCheckOut() {
    user.name = name;
    user.email = email;
    setAtCheckout(true);
    setCart(shoppingCart);

    // const li=shoppingCart.map((prodInCart) => {
    //     console.log('pic', prodInCart)
    //     const product = originalProducts.find((product) => parseInt(product.id) === prodInCart.itemId)
    //     console.log('p',product)
    //     return (
    //         <li key={prodInCart.itemId}>
    //             {prodInCart.quantity} total {product.name} at a cost of
    //             ${product.price.toFixed(2)} for a total of ${(product.price*prodInCart.quantity).toFixed(2)}
    //         </li>
    //     )
    // })


    axios.post("http://localhost:3001/store", { shoppingCart, user }).then((response) => {
      console.log(response);
    });

    console.log("sc", user, shoppingCart);
    // return(
    //     <div className='checkout'>
    //         <h3> Receipt </h3>
    //         <p> Showing receipt for {name} available at {email}: </p>

    //        {/* need to make axios post request  */}

    //     </div>
    // )
  }

  function showReceipt() {
    return shoppingCart.map((prodInCart) => {
      <div> hi </div>;
    });
    // console.log('pic', prodInCart)
    // const product = originalProducts.find((product) => parseInt(product.id) === prodInCart.itemId)
    // console.log('p',product)
    // return (
    //     <li key={prodInCart.itemId}>
    //         {prodInCart.quantity} total {product.name} at a cost of
    //         ${product.price.toFixed(2)} for a total of ${(product.price*prodInCart.quantity).toFixed(2)}
    //     </li>
    // )
  }

  return atCheckout ? (
    <Receipt
      name={name}
      email={email}
      shoppingCart={cart}
      setCart={setCart}
      originalProducts={originalProducts}
    />
  ) : (
    <div className="shopping-cart">
      <div className="cart-header">
        <caption>Shopping Cart</caption>
        <i className="material-icons md-36">add_shopping_cart</i>
      </div>
      <table>
        <thead>
          <tr>
            <th scope="row"> Name </th>
            <th scope="row"> Quantity </th>
            <th scope="row"> Unit Price </th>
            <th scope="row"> Cost </th>
          </tr>
        </thead>
        <tbody>
          {addedToCart?.map(([id, quantity]) => {
            const product = originalProducts.find(
              (product) => parseInt(id) === product.id
            );
            subTotal += quantity * product.price;
            shoppingCart.push({ itemId: parseInt(id), quantity: quantity });
            return (
              <tr>
                <th> {product.name} </th>
                <th> {quantity} </th>
                <th> ${product.price.toFixed(2)} </th>
                <th> ${(quantity * product.price).toFixed(2)} </th>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <br />
          <tr>
            <th>
              {" "}
              <hr />{" "}
            </th>
          </tr>
          <tr>
            <th scope="row" colSpan="1">
              {" "}
              Subtotal{" "}
            </th>
            <th scope="row" colSpan="4">
              {" "}
              ${subTotal.toFixed(2)}{" "}
            </th>
          </tr>

          <tr>
            <th scope="row" colSpan="1">
              {" "}
              Taxes and Fees{" "}
            </th>
            <th scope="row" colSpan="4">
              {" "}
              ${(percentTax * subTotal).toFixed(2)}{" "}
            </th>
          </tr>

          <tr>
            <th scope="row" colSpan="1">
              {" "}
              Total{" "}
            </th>
            <th scope="row" colSpan="4">
              {" "}
              ${(subTotal + percentTax * subTotal).toFixed(2)}{" "}
            </th>
          </tr>
        </tfoot>
      </table>

      <caption className="payment-info">
        Payment Info
        <span>
          <i className="material-icons md-36">monetization_on</i>
        </span>
      </caption>

      <form className="name">
        <label> Name </label>
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="   Student Name"
        />
      </form>
      <form className="email">
        <label> Email </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="   student@codepath.org"
        />
      </form>

      <button onClick={() => handleCheckOut()}> Checkout </button>
    </div>
  );
}

export default ShoppingCart;
