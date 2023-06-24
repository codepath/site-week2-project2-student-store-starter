import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ShoppingCart.css";
import Receipt from "../Receipt/Receipt";


function ShoppingCart({clearCart, cart, setCart,quantities, setQuantities, originalProducts }) {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  let subTotal = 0;
  const percentTax = 0.0875;
  const user = {};

  const [atCheckout, setAtCheckout] = useState(false);

  
  const quantsObj= {}
  for (const product of originalProducts){
    quantsObj[product.id]= 0
  }

  function handleCheckOut() {
    if (JSON.stringify(quantities)===JSON.stringify(quantsObj) || name.length===0 || email.length===0){
      alert('Incomplete fields!')
    } else{
      user.name = name;
      user.email = email;
      setAtCheckout(true);
      axios.post("http://localhost:3001/store", { cart, user }).then((response) => {
        console.log(response);
      });

    }
    
    
  }
  

  

  return atCheckout ? (
    <Receipt
      name={name}
      email={email}
      cart={cart}
      setCart={setCart}
      originalProducts={originalProducts}
      atCheckout={atCheckout}
      setAtCheckout= {setAtCheckout}
      setQuantities={setQuantities}
      clearCart={clearCart}
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
          
          { 
          cart.map((prod) => {
            const id= prod.itemId
            const quantity= prod.quantity
            const product = originalProducts.find(
              (product) => parseInt(id) === product.id
            );
            subTotal += quantity * product.price;
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
              <hr />
            </th>
          </tr>
          <tr>
            <th scope="row" colSpan="1">
              Subtotal
            </th>
            <th scope="row" colSpan="4">
              ${subTotal.toFixed(2)}
            </th>
          </tr>

          <tr>
            <th scope="row" colSpan="1">
              Taxes and Fees
            </th>
            <th scope="row" colSpan="4">
              ${(percentTax * subTotal).toFixed(2)}
            </th>
          </tr>

          <tr>
            <th scope="row" colSpan="1">
              Total
            </th>
            <th scope="row" colSpan="4">
              ${(subTotal + percentTax * subTotal).toFixed(2)}
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
