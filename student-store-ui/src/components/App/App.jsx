import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import Home from "../Home/Home";
import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";

export default function App() {
  //stores the product's list
  const [products, setProducts] = useState([]);

  const [shoppingCart, setShoppingCart] = useState([]);
  const [inProductCart, setInProductCart] = useState([]);

  //   const [checkoutForm, setCheckoutForm] = useState("");
  //useeffect, gets the api

  const handleAddItemToCart = (e) => {
    const id = e.target.value;
    let itemAlreadyInCart = shoppingCart.filter(
      (item) => parseInt(item.itemId) === parseInt(id)
    );
    if (itemAlreadyInCart.length > 0) {
      // already in cart
      let index = shoppingCart.findIndex((item) => item.itemId == id);
      let newShoppingCart = [...shoppingCart];
      newShoppingCart[index] = {
        itemId: newShoppingCart[index].itemId,
        quantity: ++newShoppingCart[index].quantity,
      };
      setShoppingCart(newShoppingCart);
    } else {
      setShoppingCart([...shoppingCart, { itemId: id, quantity: 1 }]);
    }
  };

  // console.log("SHOPPING CART", shoppingCart);

  const handleRemoveItemFromCart = (e) => {
    // setShoppingCart(...shoppingCart, shoppingCart - 1);
    const id = e.target.value;
    console.log(shoppingCart);
    let itemAlreadyInCart = shoppingCart.filter(
      (item) => parseInt(item.itemId) === parseInt(id)
    );
    if (itemAlreadyInCart.length > 0) {
      // Go each item in shopping cart, if shopping card.item = id from the click.

      let index = shoppingCart.findIndex((item) => item.itemId == id);
      let newShoppingCart = [...shoppingCart];
      if (newShoppingCart[index].quantity == 1) {
        //remove item from cart.
        //dgionnot know how to implement yet
        console.log("wait");
      } else {
        newShoppingCart[index].quantity = newShoppingCart[index].quantity - 1;
      }
      // newShoppingCart[index].quantity = newShoppingCart[index].quantity - 1;
      setShoppingCart(newShoppingCart);
    } else {
      console.log("item not in cart");
    }
  };
  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => setProducts(response.data.products))
      .catch((error) => {
        console.error(`Error fetching data: ${error}`);
      });
  }, []);
  // style="margin-left: 300px;"

  return (
    <>
      {/* returns the router and routes according to the url */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  shoppingCart={shoppingCart}
                />
              </main>
            }
          />
          {/* <Route
            path="/AllCategories"
            element={<Home products={productList} />}
          /> */}
          <Route
            path="/products/:productId"
            element={
              <main>
                <ProductDetail
                  shoppingCart={shoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                />
                {/* <Sidebar
                  shoppingCartlength={shoppingCart.length}
                  shoppingCart={shoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                /> */}
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
