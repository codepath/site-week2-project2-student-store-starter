import React from "react";
import { useState } from "react";
import "./ShoppingCart.css";
const ShoppingCart = ({ isOpen, products, shoppingCart }) => {
  const [novalueInShoppingCart, setNoValueInShoppingCart] = useState(true);
  const [productValues, setProductValues] = useState([]);
  // const [name, getName] = useState("");
  const [itemId, setItemId] = useState(0);
  const [productId, setProductId] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [cost, setCost] = useState(0);
  let subtotal = 0;
  let taxesAndFees = 0;
  // console.log("product", products);
  // console.log("itemid", itemId);

  taxesAndFees = subtotal + taxesAndFees;
  console.log(shoppingCart.length);
  // if (shoppingCart.length > 0) {
  //   setNoValueInShoppingCart(!novalueInShoppingCart);
  // }

  // shoppingCart.map((item) => {
  //   let product = {
  //     productName: products[item.itemId - 1].name,
  //     productQuantity: products.quantity,
  //     productPrice: products[item.itemId - 1],
  //     productCost: products[item.itemId - 1].price * item.quantity,
  //   };
  //   let individualProduct = productValues;
  //   individualProduct.push(product);
  // });

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
        <h2>{"Name|Quantity|Unit Price|Cost"}</h2>
      )}

      <div className="MyTable-Tr">
        {console.log(shoppingCart.length)}
        {shoppingCart.map((item) => {
          subtotal = subtotal + products[item.itemId - 1].price * item.quantity;
          return (
            <p className={itemId}>
              {products[item.itemId - 1].name},{"  "} {item.quantity} ,
              {products[item.itemId - 1].price},{" "}
              {products[item.itemId - 1].price * item.quantity}
            </p>
          );
        })}
      </div>

      {shoppingCart.length > 0 ? <p>Subtotal: {subtotal}</p> : null}
      {shoppingCart.length > 0 ? (
        <p>Taxes and Fees: {"Taxes and Fees"}</p>
      ) : null}
      {shoppingCart.length > 0 ? <p>Total:{"Total"}</p> : null}
      {/* {shoppingCart.length > 0 ? { subtotal } : null} */}

      {/* {!shoppingCart.length ? <p>{subtotal}</p> : " "} */}

      <h3>Payment Info</h3>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name"></input>
        <label for="email">Email</label>
        <input type="text" id="email" name="email"></input>
        <input type="checkbox" id="verified" value="read" />
        <label for="verified">
          I agree to the <a>terms and conditions</a>
        </label>
        <button className="checkout-btn">Checkout</button>
      </form>
      <h2>Checkout Info</h2>
      <p>Receipt</p>
      <p>
        A confirmation email will be sent to you so that you can confirm this
        order. Once you have confirmed the order, it will be delivered to your
        dorm room.
      </p>
    </>
  );
};

export default ShoppingCart;
